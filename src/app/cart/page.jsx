import CartArea from "@/components/cart-wishlist/cart-area";
import CartBreadcrumb from "@/components/common/breadcrumb/cart-breadcrumb";
import { FooterSix, HeaderTwelve, Wrapper } from "@/components/layout";

export const metadata = {
    title: "Cart - Creative Agency & Portfolio Next js Template",
};

const index = () => {
    return (
        <Wrapper> 
            <HeaderTwelve style_2={true} />
            <CartBreadcrumb title='My Cart' subtitle='Cart' />
            <CartArea />
            <FooterSix style_2={true} />
        </Wrapper>
    );
};

export default index;