import BreadcrumbOne from "@/components/common/breadcrumb/breadcrumb-1";
import PortfolioTwoCta from "@/components/cta/portfolio-2-cta";
import { Footer, Header, Wrapper } from "@/components/layout";
import PortfolioGridCol from "@/components/portfolios/portfolio-page-com/portfolio-grid-col";


export const metadata = {
    title: "Portfolio Two - Creative Agency & Portfolio Next js Template",
    icons: {
        icon: "favicon.ico",
    },
};
const index = () => {
    return (
        <Wrapper> 
            <Header top_bar={false} transparent={true} commonOffCanvas={true} />
            <BreadcrumbOne />
            <PortfolioGridCol />
            <PortfolioTwoCta />
            <Footer />
        </Wrapper>
    );
};

export default index;