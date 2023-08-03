


import { Wrapper } from "@/components/layout";
import VerticalSliderMain from "@/components/verticle-slider";

export const metadata = {
  title: "Home Vertical - Creative Agency & Portfolio Next js Template",
  icons: {
    icon: "favicon.ico",
  },
};

const index = () => {
  return (
    <Wrapper>
      <VerticalSliderMain />
    </Wrapper>
  );
};

export default index;
