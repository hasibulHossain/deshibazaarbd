import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStoreList } from "./_redux/action/store-action";
// import StoreSingleMini from "./StoreSingleMini";
import Link from 'next/link';
import ProductNoFound from "../master/productNoFound/ProductNoFound";

function StoreListFull() {
    const dispatch = useDispatch();
    const { storeList, isLoading } = useSelector((state) => state.StoreReducer);

    let list;
    if(isLoading) {
        list = <div>Loading...</div>
    } 

    if(!isLoading) {
        list = storeList.length > 0 && storeList.map((item, index) => (
                <div className="col-6 col-sm-6 col-md-2 col-lg-2" key={index}>
                    {/* <StoreSingleMini item={item} /> */}
                    <Link href={`/store/${item.slug}`}>
                        <a>
                            <div className="store-card">
                                {
                                    (item.logo !== null && item.logo !== '')?
                                    <div className="store-logo">
                                        <img src={`${process.env.NEXT_PUBLIC_URL}/images/vendors/${item.logo}`} alt={item.name} />
                                    </div>
                                    :
                                    <div className="store-logo">
                                        {item.name}
                                    </div>
                                }
                            </div>
                        </a>
                    </Link>   
                </div>
            ))
    }

    if(!isLoading && storeList.length === 0) {
        list =  <div className="col-lg-12"><ProductNoFound /></div>
    }

    useEffect(() => {
      dispatch(getStoreList());  
    }, []);

    return (
        <div className="storeList-body p-3">
            <div className="row">
                <div className="col-md-12 mb-2">
                    <h4>
                        All Stores
                    </h4>
                </div>
            </div>
            <div className="row">
                {list}
            </div>
        </div>
    )
}

export default StoreListFull;
