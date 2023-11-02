const OurServiceCard = ({ icon, title, description }: any) => {
  return (
    <div
      className="flex-shrink px-4 max-w-full w-full sm:w-1/2 tablet:w-1/3 tablet:px-6 wow fadeInUp hover:cursor-pointer "
      data-wow-duration="1s"
      style={{
        visibility: "visible",
        animationDuration: "1s",
        animationName: "fadeInUp",
      }}
    >
      <div className="py-8 px-12 mb-12 rounded-md shadow-md transform transition duration-300 ease-in-out hover:-translate-y-2 bg-darkViolet ">
        <div className="inline-block text-white mb-4">{icon}</div>
        <h3 className="text-tablet leading-normal mb-2 font-semibold text-white">
          {title}
        </h3>
        <p className="text-gray">{description}</p>
      </div>
    </div>
  );
};
export default OurServiceCard;
