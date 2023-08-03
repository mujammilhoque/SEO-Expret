import ShopBreadcrumb from "@/components/common/breadcrumb/shop-breadcrumb";
import ShopCta from "@/components/cta/shop-cta";
import { FooterSix, HeaderTwelve, Wrapper } from "@/components/layout";
import ShopArea from "@/components/shop/shop-area";

export const metadata = {
    title: "Shop Right Sidebar - Creative Agency & Portfolio Next js Template",
    icons: {
        icon: "favicon.ico",
    },
};
const index = () => {
    return (
        <Wrapper> 
            <HeaderTwelve style_2={true} />
            <ShopBreadcrumb />
            <ShopArea right_side={true} />
            <ShopCta />
            <FooterSix style_2={true} />
        </Wrapper>
    );
};

export default index;