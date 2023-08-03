import { Footer, Header, Wrapper } from "@/components/layout";
import PortfolioMetroArea from "@/components/portfolios/portfolio-page-com/portfolio-metro";




export const metadata = {
    title: "Portfolio Metro - Creative Agency & Portfolio Next js Template",
    icons: {
        icon: "favicon.ico",
    },
};

const index = () => {
    return (
        <Wrapper> 
            <Header top_bar={false} header_solid={true} commonOffCanvas={true} />
            <PortfolioMetroArea />
            <Footer />
        </Wrapper>
    );
};

export default index;