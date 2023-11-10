import Layout from "../../components/layout";
import CareersImage from "../../assets/icons/careers-banner.jpg";

const Careers = () => {
  return (
    <Layout>
      <div className="flex flex-col">
        <img
          src={CareersImage}
          alt="careers banner"
          className="h-[200px] mt-[5rem]"
        />
      </div>
    </Layout>
  );
};
export default Careers;
