import ArchitectureAbout from "@/components/abouts/architecture-about";
import ArchitectureAwards from "@/components/awards/architecture-awards";
import ArchBlogs from "@/components/blogs/arch-blogs";
import ArchitectureCounter from "@/components/counters/architecture-counter";
import ArchitectureBanner from "@/components/hero-banners/architecture-banner";
import { FooterNine, HeaderNine, Wrapper } from "@/components/layout";
import ArchitecturePortfolio from "@/components/portfolios/architecture-portfolio";
import ArchitectureServices from "@/components/services/architecture-services";
import ArchitectureTeams from "@/components/teams/architecture-teams";
import ArchitectureTestimonial from "@/components/testimonials/architecture-testimonial";
import ArchitectureVideoArea from "@/components/video-area/architecture-video-area";

export const metadata = {
    title: "Home Architecture - Creative Agency & Portfolio Next js Template"   
};

const index = () => {
    return (
      <Wrapper> 
        <HeaderNine/>
        <ArchitectureBanner/>
        <ArchitectureAbout/>
        <ArchitectureCounter/>
        <ArchitecturePortfolio/>
        <ArchitectureServices/>
        <ArchitectureAwards/>
        <ArchitectureVideoArea/>
        <ArchitectureTestimonial/>
        <ArchitectureTeams/>
        <ArchBlogs/>
        <FooterNine/>
      </Wrapper>
    );
  };
  
  export default index;