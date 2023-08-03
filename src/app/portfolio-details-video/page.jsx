import { FooterFive, Header, Wrapper } from "@/components/layout";
import PortfolioVideoDetailsArea from "@/components/portfolio-details/video-details";



export const metadata = {
    title: "Portfolio Details With Video - Creative Agency & Portfolio Next js Template",
    icons: {
        icon: "favicon.ico",
    },
};


const index = () => {
    return (
        <Wrapper> 
            <Header top_bar={false} header_black={true} commonOffCanvas={true} />
            <PortfolioVideoDetailsArea />
            <FooterFive style_2={true} />
        </Wrapper>
    );
};

export default index;