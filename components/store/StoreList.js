import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStoreList } from "./_redux/action/store-action";
import {useRouter} from 'next/router'
import Link from 'next/link';

const StoreList = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { storeList } = useSelector((state) => state.StoreReducer);

  useEffect(() => {
    ! storeList.length && dispatch(getStoreList());  
  }, []);

  return (
    <div className="productList-body p-3">
      <div className="row">
        {storeList.length > 0 &&
          storeList.map((item, index) => (
            <div className="col-4 col-md-2 col-lg-2" key={index}>
                <Link href={`/store/id=${item.id}`}>
                    <a>
                        <div className="shop-card">
                            {
                                (item.logo !== null && item.logo !== '')?
                                <div className="shop-logo">
                                    <img src={`${process.env.NEXT_PUBLIC_URL}/images/vendors/${item.logo}`} alt={item.name} />
                                </div>
                                :
                                <div className="shop-logo">
                                    {item.name}
                                </div>
                            }
                        </div>
                    </a>
                </Link>
            </div>
        ))}
      </div>
    </div>
  );
};

export default StoreList;
