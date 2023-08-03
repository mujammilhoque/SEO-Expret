import ElementsPricingMain from "@/components/elements/elements-pricing";
import { Footer, Header, Wrapper } from "@/components/layout";

export const metadata = {
    title: "Element Pricing - Creative Agency & Portfolio Next js Template",
    icons: {
        icon: "favicon.ico",
    },
};

const index = () => {
    return (
        <Wrapper> 
            <Header top_bar={false} commonOffCanvas={true} />
            <ElementsPricingMain />
            <Footer />
        </Wrapper>
    );
};

export default index;