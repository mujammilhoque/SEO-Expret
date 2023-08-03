import BreadcrumbEight from "@/components/common/breadcrumb/breadcrumb-8";
import { FooterSix, Header, Wrapper } from "@/components/layout";
import ServicesTwoArea from "@/components/services/services-2-area";

export const metadata = {
    title: "Service Two - Creative Agency & Portfolio Next js Template",
    icons: {
        icon: "favicon.ico",
    },
};

const index = () => {
    return (
        <Wrapper> 
            <Header top_bar={false} commonOffCanvas={true} />
            <BreadcrumbEight title={<>Tech Solutions <br /> for Business</>} />
            <ServicesTwoArea />
            <FooterSix style_2={true} />
        </Wrapper>
    );
};

export default index;