import FaqBreadcrumb from "@/components/common/breadcrumb/faq-breadcrumb";
import FaqArea from "@/components/faqs/faq-area";
import { FooterSix, Header, Wrapper } from "@/components/layout";


export const metadata = {
    title: "Faq - Creative Agency & Portfolio Next js Template",
    icons: {
        icon: "favicon.ico",
    },
};

const index = () => {
    return (
        <Wrapper> 
            <Header top_bar={false} header_solid={true} commonOffCanvas={true} />
            <FaqBreadcrumb />
            <FaqArea />
            <FooterSix style_2={true} />
        </Wrapper>
    );
};

export default index;