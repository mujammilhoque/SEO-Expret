import ElementsGalleryMain from "@/components/elements/elements-gallery";
import { Footer, Header, Wrapper } from "@/components/layout";

export const metadata = {
    title: "Element Gallery - Creative Agency & Portfolio Next js Template" 
};

const index = () => {
    return (
        <Wrapper> 
            <Header top_bar={false} commonOffCanvas={true} />
            <ElementsGalleryMain />
            <Footer />
        </Wrapper>
    );
};

export default index;