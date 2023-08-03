import LawyerBlogs from "@/components/blogs/lawyer-blogs";
import { FooterSix, Header, Wrapper } from "@/components/layout";
import TeamDetailsAbout from "@/components/team-details/team-details-about";
import TeamDetailsArea from "@/components/team-details/team-details-area";



export const metadata = {
    title: "Team Details - Creative Agency & Portfolio Next js Template",
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
            <TeamDetailsArea />
            <TeamDetailsAbout />
            <LawyerBlogs style_2={true} />
            <FooterSix style_2={true} />
        </Wrapper>
    );
};

export default index;