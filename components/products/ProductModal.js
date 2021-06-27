import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import SimpleModal from "../master/Modal/SimpleModal";
import ProductSingleFull from "./ProductSingleFull";
import { getSingleProductDetailsAction, toggleProductModalAction } from './_redux/Action/ProductAction';

const ProductModal = () => {

    const dispatch = useDispatch();
    const { isModalOpen, product, productSlug } = useSelector(state => state.ProductReducer);

    useEffect(() => {
        dispatch(getSingleProductDetailsAction(productSlug));
    }, [productSlug, isModalOpen]);

    return (
        <SimpleModal
            size="xl" show={isModalOpen}
            handleClose={() => dispatch(toggleProductModalAction(''))}
        >
            <ProductSingleFull product={product} modal={true} />
        </SimpleModal>
    );
}

export default ProductModal;