import ElementsTabMain from "@/components/elements/elements-tab";
import { Footer, Header, Wrapper } from "@/components/layout";


export const metadata = {
    title: "Element Tab - Creative Agency & Portfolio Next js Template",
    icons: {
        icon: "favicon.ico",
    },
};


const index = () => {
    return (
        <Wrapper> 
            <Header top_bar={false} commonOffCanvas={true} />
            <ElementsTabMain />
            <Footer />
        </Wrapper>
    );
};

export default index;