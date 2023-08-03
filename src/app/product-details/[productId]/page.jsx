import ProductDetailsBreadcrumb from "@/components/common/breadcrumb/product-details-breadcrumb";
import ShopCta from "@/components/cta/shop-cta";
import { FooterEleven, HeaderTwelve, Wrapper } from "@/components/layout";
import RelatedProducts from "@/components/product-details/related-products"; 
import ShopDetailsDynamic from "@/components/shop-details-daynamic";
import products from "@/data/products";

export const metadata = {
    title: "Shop Details - Creative Agency & Portfolio Next js Template"
};

const index = ({params}) => { 
    const  {productId}  = params;
    const singleProduct = products.find(item => Number(item.id) === Number(productId))
    return (
        <Wrapper>
            <HeaderTwelve style_2={true} />
            <ProductDetailsBreadcrumb />
            <ShopDetailsDynamic singleProduct={singleProduct} />
            <RelatedProducts />
            <ShopCta />
            <FooterEleven />
        </Wrapper>
    );
};

export default index;