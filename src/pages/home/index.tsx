import BookYourTaxiRide from "../../components/book-ride";
import CallUsNow from "../../components/call-us-now";
import FeelYourJourney from "../../components/feel-your-journey";
import GetInTouch from "../../components/get-in-touch";
import Layout from "../../components/layout";
import OurExpertDrivers from "../../components/our-expert-drivers";
import OurServices from "../../components/our-services";
import Testimonials from "../../components/testimonials";
import WhatWeOffer from "../../components/what-we-offer";
import HeroSection from "../../components/hero-section";
import GetApp from "../../components/get-app";

const Home = () => {
  return (
    <Layout>
      <HeroSection />
      <div className="bg-white h-fit pb-[4rem] flex flex-col gap-[4rem]">
        <BookYourTaxiRide />
      </div>
      <WhatWeOffer />
      <CallUsNow />
      <Testimonials />
      <GetApp />
      <OurServices />
      <FeelYourJourney />
      <OurExpertDrivers />
      <GetInTouch />
    </Layout>
  );
};
export default Home;
