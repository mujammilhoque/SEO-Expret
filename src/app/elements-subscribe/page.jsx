import ElementsSubscribeMain from "@/components/elements/elements-subscribe";
import { Footer, Header, Wrapper } from "@/components/layout";

export const metadata = {
    title: "Element Subscribe - Creative Agency & Portfolio Next js Template",
    icons: {
        icon: "favicon.ico",
    },
};
const index = () => {
    return (
        <Wrapper> 
            <Header top_bar={false} commonOffCanvas={true} />
            <ElementsSubscribeMain />
            <Footer />
        </Wrapper>
    );
};

export default index;