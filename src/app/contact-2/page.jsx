import ContactClassicArea from "@/components/contacts/contact-classic";
import { FooterSix, Header, Wrapper } from "@/components/layout";

export const metadata = {
    title: "Contact Two - Creative Agency & Portfolio Next js Template",
    icons: {
        icon: "favicon.ico",
    },
};
const index = () => {
    return (
        <Wrapper> 
            <Header top_bar={false} header_solid={true} header_black={true} />
            <ContactClassicArea />
            <FooterSix style_2={true} />
        </Wrapper>
    );
};

export default index;