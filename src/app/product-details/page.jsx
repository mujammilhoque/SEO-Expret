import ProductDetailsBreadcrumb from "@/components/common/breadcrumb/product-details-breadcrumb";
import ShopCta from "@/components/cta/shop-cta";
import { FooterEleven, HeaderTwelve, Wrapper } from "@/components/layout";
import RelatedProducts from "@/components/product-details/related-products";
import ShopDetailsArea from "@/components/shop-details";

export const metadata = {
    title: "Shop Details - Creative Agency & Portfolio Next js Template"
};
const index = () => {
    return (
        <Wrapper> 
            <HeaderTwelve style_2={true} />
            <ProductDetailsBreadcrumb /> 
            <ShopDetailsArea />
            <RelatedProducts />
            <ShopCta />
            <FooterEleven />
        </Wrapper>
    );
};

export default index;