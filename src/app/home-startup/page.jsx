import {  Wrapper, HeaderSix, FooterSix } from "@/components/layout"; 
import StartUpCta from '@/components/cta/start-up-cta';
import StartUpFaqs from '@/components/faqs/start-up-faqs';
import StartUpBlogs from '@/components/blogs/start-up-blogs';
import StartUpCounter from '@/components/counters/startup-counter';
import StartUpSupport from '@/components/supports/start-up-support';
import StartUpPricing from '@/components/pricings/start-up-pricing';
import StartupServices from '@/components/services/startup-services';
import StartupFeatures from '@/components/features/startup-features';
import HomeStartUpAbout from '@/components/abouts/home-stratup-about';
import HomeStartupBanner from '@/components/hero-banners/home-startup-banner';
import StartUpTestimonial from '@/components/testimonials/start-up-testimonial';
import StartupFeatureLists from '@/components/feature-lists/startup-feature-lists';

export const metadata = {
  title: "Home Starttup - Creative Agency & Portfolio Next js Template",
  icons: {
      icon: 'favicon.ico',
    },    
};


const index = () => {
  return (
    <Wrapper> 
      <HeaderSix />
      <HomeStartupBanner />
      <StartupFeatures />
      <HomeStartUpAbout />
      <StartUpCounter />
      <StartupServices />
      <StartupFeatureLists />
      <StartUpSupport />
      <StartUpTestimonial />
      <StartUpPricing />
      <StartUpFaqs />
      <StartUpBlogs />
      <StartUpCta />
      <FooterSix />
    </Wrapper>
  );
};

export default index;
