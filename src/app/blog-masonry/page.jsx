import BlogMasonryArea from "@/components/blogs/blog-masonry-area";
import BreadcrumbFive from "@/components/common/breadcrumb/breadcrumb-5";
import { Footer, Header, Wrapper } from "@/components/layout";


export const metadata = {
    title: "Blog Masonry - Creative Agency & Portfolio Next js Template",
    icons: {
        icon: "favicon.ico",
    },
};


const index = () => {
    return (
        <Wrapper> 
            <Header header_solid={true} commonOffCanvas={true} />
            <BreadcrumbFive title='Articles on Growth & Marketing' subtitle='Blog Masonry' />
            <BlogMasonryArea />
            <Footer />
        </Wrapper>
    );
};

export default index;