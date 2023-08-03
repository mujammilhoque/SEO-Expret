import ElementsBlogPostMain from "@/components/elements/elements-blog-post";
import { Wrapper } from "@/components/layout"; 



export const metadata = {
  title: "Element Blog Post - Creative Agency & Portfolio Next js Template",
  icons: {
    icon: "favicon.ico",
  },
};



const index = () => {
  return (
    <Wrapper>
      <ElementsBlogPostMain />
    </Wrapper>
  );
};

export default index;
