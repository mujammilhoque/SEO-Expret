

import BlogDetailsArea from "@/components/blogs/blog-details/blog-details-area"; 
import BreadcrumbSix from "@/components/common/breadcrumb/breadcrumb-6";
import { Footer, Header, Wrapper } from "@/components/layout";
import { blog_data } from "@/data";

export default function page({params}) { 
  const { blogId } = params; 
  const single_blog = blog_data.find(
    (item) => Number(item.id) === Number(blogId)
  );
  return (
    <Wrapper> 
      <Header header_solid={true} commonOffCanvas={true} />
      <BreadcrumbSix {...single_blog} />
      <BlogDetailsArea blog={single_blog} /> 
      <Footer />
    </Wrapper>
  );
}
