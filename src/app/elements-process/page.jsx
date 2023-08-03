import ElementsProcessMain from "@/components/elements/elements-process";
import { Footer, Header, Wrapper } from "@/components/layout";




export const metadata = {
    title: "Element Process - Creative Agency & Portfolio Next js Template",
    icons: {
        icon: "favicon.ico",
    },
};

const index = () => {
    return (
        <Wrapper>
            <Header top_bar={false} commonOffCanvas={true} />
            <ElementsProcessMain />
            <Footer />
        </Wrapper>
    );
};

export default index;