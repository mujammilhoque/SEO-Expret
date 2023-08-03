import { FooterFive, Header, Wrapper } from "@/components/layout";
import PortfolioDetailsListArea from "@/components/portfolio-details/list-details";


export const metadata = {
    title: "Portfolio Details With List - Creative Agency & Portfolio Next js Template",
    icons: {
        icon: "favicon.ico",
    },
};
const index = () => {
    return (
        <Wrapper>
            <Header top_bar={false} header_black={true} commonOffCanvas={true} />
            <PortfolioDetailsListArea />
            <FooterFive style_2={true} />
        </Wrapper>
    );
};

export default index;