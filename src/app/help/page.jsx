import HelpCenterArticles from "@/components/articles/help-center-articles";
import HelpCenterContacts from "@/components/contacts/help-center-contacts";
import CommonFaq from "@/components/faqs/common-faq";
import HelpCenterArea from "@/components/help-area/help-center-area";
import { FooterSix, Header, Wrapper } from "@/components/layout";

export const metadata = {
    title: "Help Center - Creative Agency & Portfolio Next js Template",
    icons: {
        icon: "favicon.ico",
    },
};
const index = () => {
    return (
        <Wrapper> 
            <Header top_bar={false} header_black={true} commonOffCanvas={true} />
            <HelpCenterArea />
            <HelpCenterArticles />
            <CommonFaq />
            <HelpCenterContacts />
            <FooterSix style_2={true} />
        </Wrapper>
    );
};

export default index;