import AboutCta from "@/components/cta/about-cta";
import CommonFaq from "@/components/faqs/common-faq";
import { FooterSix, Header, Wrapper } from "@/components/layout";
import StartUpPricing from "@/components/pricings/start-up-pricing";
import PricingTestimonial from "@/components/testimonials/pricing-testimonial";

export const metadata = {
    title: "Pricing - Creative Agency & Portfolio Next js Template",
    icons: {
        icon: "favicon.ico",
    },
};
const index = () => {
    return (
        <Wrapper> 
            <Header
                top_bar={false}
                header_black={true}
                header_solid={true}
                commonOffCanvas={true}
            />
            <StartUpPricing style_2={true} />
            <PricingTestimonial />
            <CommonFaq padd={"120"} />
            <AboutCta />
            <FooterSix style_2={true} />
        </Wrapper>
    );
};

export default index;