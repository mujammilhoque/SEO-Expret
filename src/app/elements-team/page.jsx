import ElementsTeamMain from "@/components/elements/elements-team";
import { Footer, Header, Wrapper } from "@/components/layout";


export const metadata = {
    title: "Element Team - Creative Agency & Portfolio Next js Template",
    icons: {
        icon: "favicon.ico",
    },
};


const index = () => {
    return (
        <Wrapper> 
            <Header top_bar={false} commonOffCanvas={true} />
            <ElementsTeamMain />
            <Footer />
        </Wrapper>
    );
};

export default index;