import ElementsBrandMain from "@/components/elements/elements-brand";
import { Footer, Header, Wrapper } from "@/components/layout";



export const metadata = {
    title: "Element Brand - Creative Agency & Portfolio Next js Template",
    icons: {
        icon: "favicon.ico",
    },
};


const index = () => {
    return (
        <Wrapper>
            <Header top_bar={false} commonOffCanvas={true} />
            <ElementsBrandMain />
            <Footer />
        </Wrapper>
    );
};

export default index;