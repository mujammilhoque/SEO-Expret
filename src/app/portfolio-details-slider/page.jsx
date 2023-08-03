import { FooterFive, Header, Wrapper } from "@/components/layout";
import SliderDetails from "@/components/portfolio-details/slider-details";


export const metadata = {
    title: "Portfolio Details With Slider - Creative Agency & Portfolio Next js Template",
    icons: {
        icon: "favicon.ico",
    },
};


const index = () => {
    return (
        <Wrapper> 
            <Header top_bar={false} header_solid={true} commonOffCanvas={true} />
            <SliderDetails />
            <FooterFive style_2={true} />
        </Wrapper>
    );
};

export default index;