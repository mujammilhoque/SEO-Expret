import HomeAgencyAbout from "@/components/abouts/home-agency-about";
import AgencyAward from "@/components/awards/agency-award";
import AgencyBlogs from "@/components/blogs/agency-blogs";
import AgencyBrands from "@/components/brands/agency-brands";
import AgencyCounter from "@/components/counters/agency-counter";
import AgencyCta from "@/components/cta/agency-cta";
import HomeAgencyBanner from "@/components/hero-banners/home-agency-banner";
import { FooterFour, HeaderFour, Wrapper } from "@/components/layout";
import HomeAgencyPortfolio from "@/components/portfolios/home-agency-portfolio";
import AgencyPricing from "@/components/pricings/agency-pricing";
import ServicesAgency from "@/components/services/services-agency";
import AgencyTestimonial from "@/components/testimonials/agency-testimonial";


export const metadata = {
    title: "Home Agency - Creative Agency & Portfolio Next js Template",
    icons: {
        icon: 'favicon.ico',
      },    
};

const index = () => {
  return (
    <Wrapper> 
      <HeaderFour />
      <HomeAgencyBanner />
      <ServicesAgency />
      <HomeAgencyAbout />
      <AgencyCounter />
      <HomeAgencyPortfolio />
      <AgencyAward />
      <AgencyPricing />
      <AgencyTestimonial />
      <AgencyBrands />
      <AgencyBlogs />
      <AgencyCta />
      <FooterFour />
    </Wrapper>
  );
};

export default index;
