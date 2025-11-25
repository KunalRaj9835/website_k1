import Carousel from "@/components/Carousel";
import AboutUs from "@/components/AboutUs";
import WhatWeOffer from "@/components/WhatWeOffer";
import WhyUs from "@/components/WhyUs";
import IndustrySpecialties from "@/components/IndustrySpecialties";
import CallToAction from "@/components/CallToAction";
import RecentBlogs from "@/components/RecentBlogs";
import FooterNewsletter from "@/components/FooterNewsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
  <Carousel />
  <AboutUs />
  <WhatWeOffer />

  <div id="whyus">
    <WhyUs />
  </div>

  <div id="industries">
    <IndustrySpecialties />
  </div>

  <CallToAction />
  <RecentBlogs />
  <FooterNewsletter />
  <Footer />
</main>

  );
}
