import AboutMeArea from "@/components/abouts/about-page-com/about-me";
import { FooterSix, Header, Wrapper } from "@/components/layout";

export const metadata = {
    title: "About Me - Creative Agency & Portfolio Next js Template",
    icons: {
        icon: "favicon.ico",
    },
};
const index = () => {
    return (
        <Wrapper>
            <Header top_bar={false} commonOffCanvas={true} />
            <AboutMeArea />
            <FooterSix style_2={true} />
        </Wrapper>
    );
};

export default index;