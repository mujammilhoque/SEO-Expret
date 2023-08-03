import ElementsVideoMain from "@/components/elements/elements-video";
import { Footer, Header, Wrapper } from "@/components/layout";


export const metadata = {
    title: "Element Video - Creative Agency & Portfolio Next js Template",
    icons: {
        icon: "favicon.ico",
    },
};

const index = () => {
    return (
        <Wrapper> 
            <Header top_bar={false} commonOffCanvas={true} />
            <ElementsVideoMain />
            <Footer />
        </Wrapper>
    );
};

export default index;