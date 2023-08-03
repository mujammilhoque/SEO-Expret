import JobPositionArea from "@/components/job-positions/job-position-area";
import JobSectionTitle from "@/components/job-positions/job-section-title";
import JobThumbArea from "@/components/job-positions/job-thumb-area";
import { FooterSix, Header, Wrapper } from "@/components/layout";

export const metadata = {
    title: "Job - Creative Agency & Portfolio Next js Template",
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
            <JobSectionTitle />
            <JobThumbArea />
            <JobPositionArea style_2={true} />
            <FooterSix style_2={true} />
        </Wrapper>
    );
};

export default index;