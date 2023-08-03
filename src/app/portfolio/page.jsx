import { Footer, Header, Wrapper } from "@/components/layout";
import PortfolioClassic from "@/components/portfolios/portfolio-page-com/portfolio-classic";


export const metadata = {
    title: "Portfolio - Creative Agency & Portfolio Next js Template",
    icons: {
        icon: "favicon.ico",
    },
};

const index = () => {
    return (
        <Wrapper> 
            <Header header_solid={true} top_bar={false} commonOffCanvas={true} />
            <PortfolioClassic />
            <Footer />
        </Wrapper>
    );
};

export default index;