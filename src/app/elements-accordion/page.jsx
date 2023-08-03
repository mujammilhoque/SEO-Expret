import ElementsAccordionMain from "@/components/elements/elements-accordion";
import { Footer, Header, Wrapper } from "@/components/layout";


export const metadata = {
    title: "Element Accordion - Creative Agency & Portfolio Next js Template",
    icons: {
        icon: 'favicon.ico',
      },    
};


const index = () => {
    return (
        <Wrapper> 
            <Header top_bar={false} commonOffCanvas={true} />
            <ElementsAccordionMain />
            <Footer />
        </Wrapper>
    );
};

export default index;