import ElementsHeadingMain from "@/components/elements/elements-heading";
import { Footer, Header, Wrapper } from "@/components/layout";

 


export const metadata = {
    title: "Element Heading - Creative Agency & Portfolio Next js Template",
    icons: {
        icon: "favicon.ico",
    },
};

const index = () => {
    return (
        <Wrapper> 
        <Header top_bar={false} commonOffCanvas={true} />
        <ElementsHeadingMain/>
        <Footer />
      </Wrapper>
    );
};

export default index;