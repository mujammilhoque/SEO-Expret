import ElementsTestimonialMain from "@/components/elements/elements-testimonial";
import { Footer, Header, Wrapper } from "@/components/layout";



export const metadata = {
    title: "Element Testimonial - Creative Agency & Portfolio Next js Template",
    icons: {
        icon: "favicon.ico",
    },
};

const index = () => {
    return (
        <Wrapper> 
            <Header top_bar={false} commonOffCanvas={true} />
            <ElementsTestimonialMain />
            <Footer />
        </Wrapper>
    );
};

export default index;