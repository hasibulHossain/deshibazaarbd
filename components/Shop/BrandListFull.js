import React, {useEffect} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import BrandSingleMini from './BrandSingleMini';
import { getShopList } from './_redux/Action/ShopAction';
import Paginate from '../master/paginate/Paginate';

function BrandListFull() {
    const dispatch = useDispatch();
    const { ShopList, isLoading, paginate } = useSelector((state) => state.ShopReducer);

    useEffect(() => {
        dispatch(getShopList(paginate.currentPage));
    }, []);
    
    const onPageChangeHandler = (page) => {
        if(!page) return;
        
        window.scrollTo({ top: 0, behavior: "smooth" });
        dispatch(getShopList(page.selected + 1));
    }

    return (
        <div className="row mb-3">
            {
                isLoading && [...new Array(10)].map((_, index) => (
                    <div key={index} className="col-lg-2 col-md-3 col-sm-4 col-6 px-1 px-sm-2">
                        <div className="brand-card-skeleton"></div>
                    </div>
                ))
                
            }
            {
                !isLoading && ShopList.length > 0 && ShopList.map((item, index) => (
                    <div key={index} className="col-lg-2 col-md-3 col-sm-4 col-6 px-1 px-sm-2">
                        <BrandSingleMini item={item} />
                    </div>
                ))
            }
            <div className="col-12">
                {
                    !isLoading && (
                        <Paginate 
                            pageCount={paginate.pageCount.length}
                            onPageChange={onPageChangeHandler}
                            currentPage={paginate.currentPage}
                            perPage={paginate.perPage}
                            totalItemCount={paginate.totalCount}
                        />
                    )
                }
            </div>
        </div>
    )
}

export default BrandListFull
