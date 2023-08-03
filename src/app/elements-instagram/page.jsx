import ElementsInstagramMain from "@/components/elements/elements-instagram";
import { Footer, Header, Wrapper } from "@/components/layout";

export const metadata = {
    title: "Element Instagram - Creative Agency & Portfolio Next js Template",
    icons: {
        icon: "favicon.ico",
    },
};

const index = () => {
    return (
        <Wrapper> 
        <Header top_bar={false} commonOffCanvas={true} />
        <ElementsInstagramMain/>
        <Footer />
      </Wrapper>
    );
};

export default index;