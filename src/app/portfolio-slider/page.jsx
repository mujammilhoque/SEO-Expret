import { Header, Wrapper } from "@/components/layout";
import PortfolioSliderArea from "@/components/portfolios/portfolio-page-com/portfolio-slider";


export const metadata = {
    title: "Portfolio Slider - Creative Agency & Portfolio Next js Template",
    icons: {
        icon: "favicon.ico",
    },
};

const index = () => {
    return (
        <Wrapper> 
            <Header
                top_bar={false}
                header_solid={true}
                commonOffCanvas={true}
                header_solid_2="header__white-solid-2 header__transparent"
            />
            <PortfolioSliderArea />
        </Wrapper>
    );
};

export default index;