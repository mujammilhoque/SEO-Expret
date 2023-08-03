import { Footer, Header, Wrapper } from "@/components/layout";
import PortfolioClassic from "@/components/portfolios/portfolio-page-com/portfolio-classic";

export const metadata = {
    title: "Portfolio Gallery - Creative Agency & Portfolio Next js Template",
    icons: {
        icon: "favicon.ico",
    },
};

const index = () => {
    return (
        <Wrapper> 
            <Header top_bar={false} header_solid={true} commonOffCanvas={true} />
            <PortfolioClassic tooltip_hover={true} />
            <Footer />
        </Wrapper>
    );
};

export default index;