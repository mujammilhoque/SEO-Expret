import ElementsSkillMain from "@/components/elements/elements-skill";
import { Footer, Header, Wrapper } from "@/components/layout";



export const metadata = {
    title: "Element Skill - Creative Agency & Portfolio Next js Template",
    icons: {
        icon: "favicon.ico",
    },
};

const index = () => {
    return (
        <Wrapper>
            <Header top_bar={false} commonOffCanvas={true} />
            <ElementsSkillMain />
            <Footer />
        </Wrapper>
    );
};

export default index;