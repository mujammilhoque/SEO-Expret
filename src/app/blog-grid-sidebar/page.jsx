
import BlogGridAreaTwoSliderIndex from "@/components/blogs/blog-props/blog-grid-area-2-slider-index";
import SliderBreadcrumb from "@/components/common/breadcrumb/slider-breadcrumb";
import { Footer, Header, Wrapper } from "@/components/layout";


export const metadata = {
    title: "Blog Grid Sideber - Creative Agency & Portfolio Next js Template",
    icons: {
        icon: "favicon.ico",
    },
};

const index = () => {
    return (
        <Wrapper> 
            <Header header_solid={true} commonOffCanvas={true} />
            <SliderBreadcrumb />
            <BlogGridAreaTwoSliderIndex />
            <Footer />
        </Wrapper>
    );
};

export default index;