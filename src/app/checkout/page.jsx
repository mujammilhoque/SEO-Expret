import CheckoutArea from "@/components/checkout/checkout-area";
import CouponArea from "@/components/checkout/coupon-area";
import CartBreadcrumb from "@/components/common/breadcrumb/cart-breadcrumb";
import { FooterSix, HeaderTwelve, Wrapper } from "@/components/layout";


export const metadata = {
    title: "Checkout - Creative Agency & Portfolio Next js Template",
};
const index = () => {
    return (
        <Wrapper> 
            <HeaderTwelve style_2={true} />
            <CartBreadcrumb title='Checkout' subtitle='Checkout' />
            <CouponArea />
            <CheckoutArea />
            <FooterSix style_2={true} />
        </Wrapper>
    );
};

export default index;