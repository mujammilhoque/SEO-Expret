import HomeFreelancerAbout from "@/components/abouts/home-freelancer-about";
import FreelancerAward from "@/components/awards/freelancer-award";
import FreelancerBlogs from "@/components/blogs/freelancer-blogs";
import HomeFreelancerBrands from "@/components/brands/home-freelancer-brands";
import FreelancerCta from "@/components/cta/freelancer-cta";
import HomeFreelancerBanner from "@/components/hero-banners/home-freelancer-banner";
import { FooterThree, HeaderThree, Wrapper } from "@/components/layout";
import HomeFreelancerPortfolio from "@/components/portfolios/home-freelancer-portfolio";
import FreelancerSkills from "@/components/skills/freelancer-skills";
import FreelancerTestimonial from "@/components/testimonials/freelancer-testimonial";

export const metadata = {
    title: "Home Freelancer - Creative Agency & Portfolio Next js Template",
    icons: {
        icon: 'favicon.ico',
      },    
};

const index = () => {
    return (
        <Wrapper> 
            <HeaderThree/>
            <HomeFreelancerBanner/>
            <HomeFreelancerBrands/>
            <HomeFreelancerAbout/>
            <HomeFreelancerPortfolio/>
            <FreelancerSkills/>
            <FreelancerAward/>
            <FreelancerTestimonial/>
            <FreelancerBlogs/>
            <FreelancerCta/>
            <FooterThree/>
        </Wrapper>
    );
};

export default index;