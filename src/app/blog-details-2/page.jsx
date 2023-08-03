import BlogDetailsTwoArea from "@/components/blogs/blog-details-2/blog-details-2-area";
import { Footer, Header, Wrapper } from "@/components/layout";


export const metadata = {
    title: "Blog Details Two - Creative Agency & Portfolio Next js Template",
    icons: {
        icon: "favicon.ico",
    },
};

const index = () => {
    return (
        <Wrapper> 
            <Header header_solid={true} commonOffCanvas={true} />
            <BlogDetailsTwoArea />
            <Footer />
        </Wrapper>
    );
};

export default index;