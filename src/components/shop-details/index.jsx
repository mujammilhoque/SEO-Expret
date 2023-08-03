'use client'
import ProductDetailsArea from '../product-details/product-details-area';
import ProductDetailsTabArea from '../product-details/product-details-tab-area';
import products from '@/data/products';

const ShopDetailsArea = () => {
    const singleProduct = products[0];
    return (
        <>
            <ProductDetailsArea product={singleProduct} />
            <ProductDetailsTabArea product={singleProduct} />
        </>
    );
};

export default ShopDetailsArea;