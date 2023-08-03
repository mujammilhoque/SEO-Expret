import ElementsCtaMain from "@/components/elements/elements-cta";
import { Footer, Header, Wrapper } from "@/components/layout";



export const metadata = {
    title: "Element Cta - Creative Agency & Portfolio Next js Template",
    icons: {
        icon: "favicon.ico",
    },
};

const index = () => {
    return (
        <Wrapper> 
            <Header top_bar={false} commonOffCanvas={true} />
            <ElementsCtaMain />
            <Footer />
        </Wrapper>
    );
};

export default index;