import AboutArea from "@/components/abouts/about-page-com/about";
import { FooterSix, Header, Wrapper } from "@/components/layout";


export const metadata = {
    title: "About - Creative Agency & Portfolio Next js Template",
    icons: {
        icon: "favicon.ico",
    },
};

const index = () => {
    return (
        <Wrapper> 
            <Header top_bar={false} commonOffCanvas={true} />
            <AboutArea />
            <FooterSix style_2={true} />
        </Wrapper>
    );
};

export default index;