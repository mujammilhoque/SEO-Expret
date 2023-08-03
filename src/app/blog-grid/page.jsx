import BlogGridArea from "@/components/blogs/blog-grid-area";
import SliderBreadcrumb from "@/components/common/breadcrumb/slider-breadcrumb";
import { Footer, Header, Wrapper } from "@/components/layout";


export const metadata = {
    title: "Blog Grid  - Creative Agency & Portfolio Next js Template",
    icons: {
        icon: "favicon.ico",
    },
};

const index = () => {
    return (
        <Wrapper> 
            <Header header_solid={true} commonOffCanvas={true} />
            <SliderBreadcrumb />
            <BlogGridArea />
            <Footer />
        </Wrapper>
    );
};

export default index;