import ElementsShopMain from "@/components/elements/elements-shop";
import { Footer, Header, Wrapper } from "@/components/layout";

export const metadata = {
    title: "Element Shop - Creative Agency & Portfolio Next js Template",
    icons: {
        icon: "favicon.ico",
    },
};

const index = () => {
    return (
        <Wrapper> 
            <Header top_bar={false} commonOffCanvas={true} />
            <ElementsShopMain />
            <Footer />
        </Wrapper>
    );
};

export default index;