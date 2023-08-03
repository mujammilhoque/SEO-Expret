import { HeaderThirteen, Wrapper } from "@/components/layout";
import SwiperSliderArea from "@/components/swiper-slider";

 

export const metadata = {
    title: "Home Swiper - Creative Agency & Portfolio Next js Template",
    icons: {
        icon: 'favicon.ico',
      },    
  };
  

const index = () => {
  return (
    <Wrapper> 
      <HeaderThirteen/>
      <SwiperSliderArea/>
    </Wrapper>
  );
};

export default index;
