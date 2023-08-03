import ElementsFormMain from "@/components/elements/elements-form";
import { Footer, Header, Wrapper } from "@/components/layout";

 

export const metadata = {
    title: "Element Form - Creative Agency & Portfolio Next js Template",
    icons: {
        icon: "favicon.ico",
    },
};


const index = () => {
    return (
        <Wrapper> 
            <Header top_bar={false} commonOffCanvas={true} />
            <ElementsFormMain />
            <Footer />
        </Wrapper>
    );
};

export default index;
