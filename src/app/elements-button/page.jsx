import ElementsButtonMain from "@/components/elements/elements-button";
import { Footer, Header, Wrapper } from "@/components/layout";


export const metadata = {
    title: "Element Buttons - Creative Agency & Portfolio Next js Template",
    icons: {
        icon: "favicon.ico",
    },
};

const index = () => {
    return (
        <Wrapper>
            <Header top_bar={false} commonOffCanvas={true} />
            <ElementsButtonMain />
            <Footer />
        </Wrapper>
    );
};

export default index;