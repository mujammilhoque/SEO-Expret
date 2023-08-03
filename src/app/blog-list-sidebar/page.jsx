import BlogListArea from "@/components/blogs/blog-list-area";
import SliderBreadcrumb from "@/components/common/breadcrumb/slider-breadcrumb";
import { Footer, Header, Wrapper } from "@/components/layout";


export const metadata = {
    title: "Blog List Sidebar - Creative Agency & Portfolio Next js Template",
    icons: {
        icon: "favicon.ico",
    },
};


const index = () => {
    return (
        <Wrapper> 
            <Header header_solid={true} commonOffCanvas={true} />
            <SliderBreadcrumb />
            <BlogListArea />
            <Footer />
        </Wrapper>
    );
};

export default index;