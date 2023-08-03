import ElementsParallaxMain from "@/components/elements/elements-parallax";
import { Footer, Header, Wrapper } from "@/components/layout";


export const metadata = {
    title: "Element Parallax - Creative Agency & Portfolio Next js Template",
    icons: {
        icon: "favicon.ico",
    },
};

const index = () => {
    return (
        <Wrapper> 
            <Header top_bar={false} commonOffCanvas={true} />
            <ElementsParallaxMain />
            <Footer />
        </Wrapper>
    );
};

export default index;