import BookYourTaxiRide from "../../components/book-ride";
import CallUsNow from "../../components/call-us-now";
import FeelYourJourney from "../../components/feel-your-journey";
import Layout from "../../components/layout";
import OurExpertDrivers from "../../components/our-expert-drivers";
import OurServices from "../../components/our-services";
import Testimonials from "../../components/testimonials";
import WhatWeOffer from "../../components/what-we-offer";
import HeroSection from "../../components/hero-section";
import GetApp from "../../components/get-app";
import NewsAndInsights from "../../components/news-insights";
import AchievementsSection from "../../components/achievements-section";
import BecomePartner from "../../components/become-partner";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    location?.state?.isNavigated &&
      document
        .getElementById("book-ride")
        ?.scrollIntoView({ behavior: "smooth" });
  }, [location?.state?.isNavigated]);

  return (
    <Layout>
      <HeroSection />
      <div className="bg-white h-fit pb-[4rem] flex flex-col gap-[4rem]">
        <BookYourTaxiRide />
      </div>
      <AchievementsSection />
      <WhatWeOffer />
      <CallUsNow />
      <Testimonials />
      <GetApp />
      <OurServices />
      <FeelYourJourney />
      <OurExpertDrivers />
      <NewsAndInsights />
      <BecomePartner />
    </Layout>
  );
};
export default Home;
