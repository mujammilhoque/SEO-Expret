import ElementsMapMain from "@/components/elements/elements-map";
import { Footer, Header, Wrapper } from "@/components/layout";



export const metadata = {
    title: "Element Map - Creative Agency & Portfolio Next js Template",
    icons: {
        icon: "favicon.ico",
    },
};


const index = () => {
    return (
        <Wrapper> 
            <Header top_bar={false} commonOffCanvas={true} />
            <ElementsMapMain />
            <Footer />
        </Wrapper>
    );
};

export default index;