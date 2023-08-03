// import ShopCategory from '@components/shop/shop-category';
import ShopCta from "@/components/cta/shop-cta";
import ProductFeature from "@/components/features/product-feature";
import ShopHeroBanner from "@/components/hero-banners/shop-hero-banner";
import { FooterEleven, HeaderTwelve, Wrapper } from "@/components/layout";
import ShopBanner from "@/components/shop/shop-banner";
import ShopCategoryArea from "@/components/shop/shop-category/shop-category";
import ShopProducts from "@/components/shop/shop-products";

 

export const metadata = {
    title: "Home Shop - Creative Agency & Portfolio Next js Template",
    icons: {
        icon: 'favicon.ico',
      },    
};


const index = () => {
  return (
    <Wrapper>  
      <HeaderTwelve/>
      <ShopHeroBanner/>
      <ShopCategoryArea/>
      <ShopProducts/>
      <ShopBanner/>
      <ProductFeature/>
      <ShopCta/>
      <FooterEleven/>
    </Wrapper>
  );
};

export default index;