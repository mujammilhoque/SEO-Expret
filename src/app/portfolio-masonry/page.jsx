import { Footer, Header, Wrapper } from "@/components/layout";
import { PortfolioMasonryArea } from "@/components/portfolios/portfolio-page-com/portfolio-masonry";




export const metadata = {
    title: "Portfolio Masonry - Creative Agency & Portfolio Next js Template",
    icons: {
        icon: "favicon.ico",
    },
};


const index = () => {
    return (
        <Wrapper> 
            <Header top_bar={false} header_solid={true} commonOffCanvas={true} />
            <PortfolioMasonryArea />
            <Footer />
        </Wrapper>
    );
};

export default index;