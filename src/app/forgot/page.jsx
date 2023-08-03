import { FooterSix, Header, Wrapper } from "@/components/layout";
import ForgotArea from "@/components/login-register/forgot-area";

export const metadata = {
    title: "Forgot - Creative Agency & Portfolio Next js Template",
};
const index = () => {
    return (
        <Wrapper> 
            <Header top_bar={false} header_solid={true} commonOffCanvas={true} />
            <ForgotArea />
            <FooterSix style_2={true} />
        </Wrapper>
    );
};

export default index;