import ElementsCarouselMain from "@/components/elements/elements-carousel";
import { Footer, Header, Wrapper } from "@/components/layout";

export const metadata = {
    title: "Element Carousel - Creative Agency & Portfolio Next js Template",
    icons: {
        icon: "favicon.ico",
    },
};


const index = () => {
    return (
        <Wrapper> 
            <Header top_bar={false} commonOffCanvas={true} />
            <ElementsCarouselMain />
            <Footer />
        </Wrapper>
    );
};

export default index;