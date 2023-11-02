import OurServiceCard from "./card";
import { ourServiceData } from "./meta";

const OurServices = () => {
  return (
    <div
      id="services"
      className="section relative pt-20 pb-8 md:pt-16 md:pb-0 bg-white"
    >
      <div className="container xl:max-w-6xl mx-auto px-4">
        <header className="text-center mx-auto mb-12 tablet:px-20">
          <h2 className="text-3xl leading-normal capitalize mb-2 font-bold text-darkViolet">
            WHAT WE DO
          </h2>
          <p className="text-gray-500 leading-relaxed font-light text-xl mx-auto pb-2">
            Save time managing advertising &amp; Content for your business.
          </p>
        </header>
        <div className="flex flex-wrap flex-row -mx-4 text-center ">
          {ourServiceData.map((data, index) => (
            <OurServiceCard {...data} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
