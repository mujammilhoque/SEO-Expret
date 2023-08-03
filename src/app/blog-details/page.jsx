 
import BlogDetailsIndex from "@/components/blogs/blog-details/blog-details-index"; 
import { Footer, Header, Wrapper } from "@/components/layout";

export const metadata = {
  title: "Blog Details - Creative Agency & Portfolio Next js Template",
  icons: {
    icon: "favicon.ico",
  },
};
export default function BlogDetails() {
  return (
    <Wrapper>
      <Header header_solid={true} commonOffCanvas={true} />
      <BlogDetailsIndex />
      <Footer />
    </Wrapper>
  );
}
