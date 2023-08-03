import PoliticianBiography from "@/components/biography/politician-biography";
import PoliticianBlogs from "@/components/blogs/politician-blogs";
import PoliticianCounter from "@/components/counters/politician-counter";
import PoliticianCta from "@/components/cta/politician-cta";
import PoliticianDonate from "@/components/donate/politician-donate";
import PoliticianEvents from "@/components/events/politician-events";
import PoliticianFeature from "@/components/features/politician-feature";
import PoliticianBanner from "@/components/hero-banners/politician-banner";
import { FooterTen, HeaderEleven, Wrapper } from "@/components/layout";
import PoliticianSubscribe from "@/components/subscribe/politician-subscribe";
import PoliticianTeams from "@/components/teams/politician-teams";
import PoliticianTestimonial from "@/components/testimonials/politician-testimonial";
import PoliticianVision from "@/components/visions/politician-vision";




export const metadata = {
    title: "Home Politician - Creative Agency & Portfolio Next js Template",
    icons: {
        icon: 'favicon.ico',
    },
};

const index = () => {
    return (
        <Wrapper>
            <HeaderEleven />
            <PoliticianBanner />
            <PoliticianCta />
            <PoliticianFeature />
            <PoliticianVision />
            <PoliticianCounter />
            <PoliticianEvents />
            <PoliticianBiography />
            <PoliticianTeams />
            <PoliticianDonate />
            <PoliticianBlogs />
            <PoliticianTestimonial />
            <PoliticianSubscribe />
            <FooterTen />
        </Wrapper>
    );
};

export default index;