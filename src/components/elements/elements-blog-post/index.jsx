'use client'
import { Footer, Header } from "@/components/layout";
import ElementsBlogPost from "./ElementsBlogPost";


const ElementsBlogPostMain = () => {
    return (
        <>
            <Header top_bar={false} commonOffCanvas={true} />
            <ElementsBlogPost/>
            <Footer />
        </>
    );
};

export default ElementsBlogPostMain;