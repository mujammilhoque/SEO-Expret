import HomeLawyerAbout from "@/components/abouts/home-lowyer-about";
import HomeAward from "@/components/awards/home-award";
import LawyerBlogs from "@/components/blogs/lawyer-blogs";
import LawyerContact from "@/components/contacts/lawyer-contact";
import LawyerCounter from "@/components/counters/lawyer-counter";
import LawyerFacts from "@/components/fun-facts/lawyer-facts";
import HomeLowyerBanner from "@/components/hero-banners/home-lowyer-banner";
import LawyerHistory from "@/components/histories/lawyer-history";
import { FooterTwo, HeaderTwo, Wrapper } from "@/components/layout";
import HomeLowyerCase from "@/components/portfolios/home-lowyer-case";
import ServicesLawyer from "@/components/services/services-lawyer";
import LawyerTeams from "@/components/teams/lawyer-teams";
import LawyerTestimonial from "@/components/testimonials/lawyer-testimonial";
import LawyerVideoArea from "@/components/video-area/lawyer-video-area";

export const metadata = {
    title: "Home Lawyer - Creative Agency & Portfolio Next js Template",
    icons: {
        icon: 'favicon.ico',
      },    
};

const index = () => {
  return (
    <Wrapper> 
      <HeaderTwo />
      <HomeLowyerBanner />
      <HomeAward />
      <HomeLowyerCase />
      <HomeLawyerAbout />
      <LawyerFacts />
      <LawyerHistory />
      <LawyerVideoArea />
      <ServicesLawyer />
      <LawyerBlogs />
      <LawyerTestimonial />
      <LawyerTeams />
      <LawyerCounter />
      <LawyerContact />
      <FooterTwo />
    </Wrapper>
  );
};

export default index;
