import ContactArea from "@/components/contacts/contact-area";
import { FooterSix, Header, Wrapper } from "@/components/layout";

export const metadata = {
    title: "Contact - Creative Agency & Portfolio Next js Template",
    icons: {
        icon: "favicon.ico",
    },
};


const index = () => {
    return (
        <Wrapper> 
            <Header top_bar={false} header_solid={true} />
            <ContactArea />
            <FooterSix style_2={true} />
        </Wrapper>
    );
};

export default index;