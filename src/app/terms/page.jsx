import { FooterSix, Header, Wrapper } from "@/components/layout";
import SectionArea from "@/components/section-area/section-area";
import TermsArea from "@/components/terms-policy/terms-area";

export const metadata = {
    title: "Terms - Creative Agency & Portfolio Next js Template", 
};
const index = () => {
    return (
        <Wrapper> 
            <Header top_bar={false} header_solid={true} commonOffCanvas={true} />
            <SectionArea
                title="Terms and Conditions"
                subtitle="The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural."
            />
            <TermsArea />
            <FooterSix style_2={true} />
        </Wrapper>
    );
};

export default index;