import JobDetailsArea from "@/components/job-details/job-details-area";
import { FooterSix, Header, Wrapper } from "@/components/layout";

export const metadata = {
    title: "Job Details - Creative Agency & Portfolio Next js Template",
    icons: {
        icon: "favicon.ico",
    },
};
const index = () => {
    return (
        <Wrapper> 
            <Header
                top_bar={false}
                header_black={true}
                header_solid={true}
                commonOffCanvas={true}
            />
            <JobDetailsArea />
            <FooterSix style_2={true} />
        </Wrapper>
    );
};

export default index;