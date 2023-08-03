import { FooterSix, Header, Wrapper } from "@/components/layout";
import RegisterArea from "@/components/login-register/register-area";

export const metadata = {
    title: "Register - Creative Agency & Portfolio Next js Template",
};


const index = () => {
    return (
        <Wrapper> 
            <Header top_bar={false} header_solid={true} commonOffCanvas={true} />
            <RegisterArea />
            <FooterSix style_2={true} />
        </Wrapper>
    );
};

export default index;