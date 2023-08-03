import PhotographerAbout from "@/components/abouts/photographer-about";
import PhotographerBrands from "@/components/brands/photographer-brands";
import PhotographerBanner from "@/components/hero-banners/photographer-banner";
import PhotographyInstagram from "@/components/instagram/photography-instagram";
import { FooterFive, HeaderFive, Wrapper } from "@/components/layout";
import PhotographerPortfolio from "@/components/portfolios/photographer-portfolio";
import PhotographyPrice from "@/components/pricings/photography-price";
import PhotographyReview from "@/components/review-area/photography-review";
import PhotographyService from "@/components/services/photography-services";
import PhotographyTestimonial from "@/components/testimonials/photography-testimonial";



export const metadata = {
    title: "Home Photographer - Creative Agency & Portfolio Next js Template",
    icons: {
        icon: 'favicon.ico',
      },    
};

const index = () => {
  return (
    <Wrapper> 
      <HeaderFive />
      <PhotographerBanner />
      <PhotographerAbout />
      <PhotographerPortfolio />
      <PhotographyPrice />
      <PhotographyService />
      <PhotographyReview />
      <PhotographyTestimonial />
      <PhotographerBrands />
      <PhotographyInstagram />
      <FooterFive />
    </Wrapper>
  );
};

export default index;
