import ElementsIconBoxMain from "@/components/elements/elements-iconbox";
import { Footer, Header, Wrapper } from "@/components/layout";



export const metadata = {
    title: "Element IconBox - Creative Agency & Portfolio Next js Template",
    icons: {
        icon: "favicon.ico",
    },
};


const index = () => {
    return (
        <Wrapper> 
            <Header top_bar={false} commonOffCanvas={true} />
            <ElementsIconBoxMain />
            <Footer />
        </Wrapper>
    );
};

export default index;