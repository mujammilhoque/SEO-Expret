import ElementsSocialMain from "@/components/elements/elements-social";
import { Footer, Header, Wrapper } from "@/components/layout";




export const metadata = {
    title: "Element Social - Creative Agency & Portfolio Next js Template",
    icons: {
        icon: "favicon.ico",
    },
};

const index = () => {
    return (
        <Wrapper> 
            <Header top_bar={false} commonOffCanvas={true} />
            <ElementsSocialMain />
            <Footer />
        </Wrapper>
    );
};

export default index;