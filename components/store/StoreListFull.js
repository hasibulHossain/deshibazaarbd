import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStoreList } from "./_redux/action/store-action";
import StoreSingleMini from "./StoreSingleMini";

function StoreListFull() {
    const dispatch = useDispatch();
    const { storeList } = useSelector((state) => state.StoreReducer);

    useEffect(() => {
      ! storeList.length && dispatch(getStoreList());  
    }, []);

    return (
        <div className="storeList-body p-3">
            <div className="row">
                {storeList.length > 0 &&
                storeList.map((item, index) => (
                    <div className="col-4 col-md-2 col-lg-2" key={index}>
                        <StoreSingleMini item={item} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default StoreListFull;
