import ComingSoon from "@/components/coming-soon";
import { HeaderFourteen, Wrapper } from "@/components/layout";

export const metadata = {
    title: "Coming Soon - Creative Agency & Portfolio Next js Template",
    icons: {
        icon: "favicon.ico",
    },
};

const index = () => {
    return (
        <Wrapper> 
            <HeaderFourteen />
            <ComingSoon /> 
        </Wrapper>
    );
};

export default index;