import { FooterSix, Header, Wrapper } from "@/components/layout";
import LoginArea from "@/components/login-register/login-area";

export const metadata = {
    title: "Login - Creative Agency & Portfolio Next js Template",
};

const index = () => {
    return (
        <Wrapper> 
            <Header top_bar={false} header_solid={true} commonOffCanvas={true} />
            <LoginArea />
            <FooterSix style_2={true} />
        </Wrapper>
    );
};

export default index;