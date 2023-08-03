'use client'
import ProductDetailsArea from "../product-details/product-details-area";
import ProductDetailsTabArea from "../product-details/product-details-tab-area";

const ShopDetailsDynamic = ({ singleProduct }) => {

    return (
        <>
            <ProductDetailsArea product={singleProduct} />
            <ProductDetailsTabArea product={singleProduct} />
        </>
    );
};

export default ShopDetailsDynamic;