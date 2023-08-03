import PortfolioAbout from "@/components/abouts/portfolio-about";
import PortfolioSkills from "@/components/skills/portfolio-skills";
import PortfolioFeature from "@/components/features/portfolio-feature";
import { FooterEight, HeaderEight, Wrapper } from "@/components/layout";
import PortfolioBanner from "@/components/hero-banners/portfolio-banner";
import PortfolioService from "@/components/services/portfolio-service"; 
import HomePersonalPortfolioArea from "@/components/portfolios/home-personal-portfolio";
import PortfolioAwards from "@/components/awards/portfolio-awards";
import PortfolioTestimonial from "@/components/testimonials/portfolio-testimonial";
import PortfolioBlogs from "@/components/blogs/portfolio-blogs";
import PortfolioContact from "@/components/contacts/portfolio-contact";


export const metadata = {
    title: "Home Portfolio - Creative Agency & Portfolio Next js Template",
    icons: {
        icon: 'favicon.ico',
      },    
};

const index = () => {
    return (
      <Wrapper> 
        <HeaderEight/>
        <PortfolioBanner/>
        <PortfolioAbout/>
        <PortfolioFeature/>
        <PortfolioService/>
        <HomePersonalPortfolioArea/>
        <PortfolioSkills/>
        <PortfolioAwards/>
        <PortfolioTestimonial/>
        <PortfolioBlogs/>
        <PortfolioContact/>
        <FooterEight />
      </Wrapper>
    );
  };
  
  export default index;