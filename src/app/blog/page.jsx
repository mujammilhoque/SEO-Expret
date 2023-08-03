import BlogPostboxArea from "@/components/blogs/blog-postbox-area";
import BreadcrumbFour from "@/components/common/breadcrumb/breadcrumb-4";
import { Footer, Header, Wrapper } from "@/components/layout";

export const metadata = {
    title: "Blogs  - Creative Agency & Portfolio Next js Template", 
};


const index = () => {
    return (
        <Wrapper> 
            <Header header_solid={true} commonOffCanvas={true} />
            <BreadcrumbFour title='Our Blog' subtitle='Blog' />
            <BlogPostboxArea />
            <Footer />
        </Wrapper>
    );
};

export default index;