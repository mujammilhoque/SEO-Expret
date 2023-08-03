import { FooterSix, Header, Wrapper } from "@/components/layout";
import SearchArea from "@/components/search/search-area";
import SearchResultItem from "@/components/search/search-result-item";


export const metadata = {
    title: "Search - Creative Agency & Portfolio Next js Template",
    icons: {
        icon: "favicon.ico",
    },
};
const index = () => {
    return (
        <Wrapper> 
            <Header top_bar={false} header_solid={true} commonOffCanvas={true} />
            <SearchArea />
            <SearchResultItem />
            <FooterSix style_2={true} />
        </Wrapper>
    );
};

export default index;