import { FooterSeven, HeaderSeven, Wrapper } from "@/components/layout";
import CreativeCta from "@/components/cta/creative-cta";
import CreativeTeam from "@/components/teams/creative-team";
import CreativeCtaTwo from "@/components/cta/creative-cta-2";
import CreativeBlogs from "@/components/blogs/creative-blogs";
import CreativeAbout from "@/components/abouts/creative-about";
import CreativeBrands from "@/components/brands/creative-brands";
import CreativeFeature from "@/components/features/creative-feature";
import CreativeBanner from "@/components/hero-banners/creative-banner";
import CreativePortfolio from "@/components/portfolios/creative-portfolio";
import CreativeTestimonial from "@/components/testimonials/creative-testimonial";


export const metadata = {
    title: "Home Creative - Creative Agency & Portfolio Next js Template"   
};

const index = () => {
    return (
        <Wrapper> 
            <HeaderSeven />
            <CreativeBanner />
            <CreativeFeature />
            <CreativeAbout />
            <CreativeCta />
            <CreativePortfolio />
            <CreativeTeam />
            <CreativeBlogs />
            <CreativeTestimonial />
            <CreativeBrands />
            <CreativeCtaTwo />
            <FooterSeven />
        </Wrapper>
    );
};

export default index;