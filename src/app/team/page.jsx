import TeamBreadcrumb from "@/components/common/breadcrumb/team-breadcrumb";
import JobPositionArea from "@/components/job-positions/job-position-area";
import { FooterSix, Header, Wrapper } from "@/components/layout";
import TeamsArea from "@/components/teams/teams-area";

export const metadata = {
    title: "Team - Creative Agency & Portfolio Next js Template",
    icons: {
        icon: "favicon.ico",
    },
};
const index = () => {
    return (
        <Wrapper> 
            <Header top_bar={false} />
            <TeamBreadcrumb />
            <TeamsArea />
            <JobPositionArea />
            <FooterSix style_2={true} />
        </Wrapper>
    );
};

export default index;