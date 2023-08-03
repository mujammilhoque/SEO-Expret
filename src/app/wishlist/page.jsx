import WishlistArea from "@/components/cart-wishlist/wishlist-area";
import CartBreadcrumb from "@/components/common/breadcrumb/cart-breadcrumb";
import { FooterSix, HeaderTwelve, Wrapper } from "@/components/layout";

export const metadata = {
    title: "Wishlist - Creative Agency & Portfolio Next js Template",
};

const index = () => {
    return (
        <Wrapper> 
            <HeaderTwelve style_2={true} />
            <CartBreadcrumb title='My Wishlist' subtitle='Wishlist' />
            <WishlistArea />
            <FooterSix style_2={true} />
        </Wrapper>
    );
};

export default index;