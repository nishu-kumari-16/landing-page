import FadeInWhenVisible from "../fade-in-visible";
import GetInTouchCard from "./card";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import CampaignIcon from "@mui/icons-material/Campaign";
import HandshakeIcon from "@mui/icons-material/Handshake";

const GetInTouch = () => {
  return (
    <section className="bg-gray dark:bg-gray-900">
      <div className="container px-6 py-12 mx-auto">
        <div>
          <div className="text-verDarkViolet font-bold uppercase text-[2rem] text-center relative z-[3]">
            GET IN TOUCH
          </div>

          <FadeInWhenVisible>
            <p className="mt-3 text-gray-500 dark:text-gray-400 text-center">
              Our friendly team would love to hear from you.
            </p>
          </FadeInWhenVisible>
        </div>

        <div className="flex flex-col tablet:flex-row gap-6  mt-6">
          <div className="flex flex-1 flex-col gap-6 flex-wrap">
            <div className="flex gap-6 flex-col tablet:flex-row ">
              <GetInTouchCard
                icon={<EmailIcon />}
                title="Email Us"
                description="Email us at govahana@gmail.com"
              />
              <GetInTouchCard
                icon={<PhoneIcon />}
                title="Ask the community"
                description="Email us at govahana@gmail.com"
              />
            </div>
            <div className="flex gap-6 flex-col tablet:flex-row ">
              <GetInTouchCard
                icon={<CampaignIcon />}
                title="Report Fraud"
                description="Email us at govahana@gmail.com"
              />
              <GetInTouchCard
                icon={<HandshakeIcon />}
                title="Partnerships"
                description="Email us at govahana@gmail.com"
              />
            </div>
          </div>

          <div className="overflow-hidden flex-1 h-96 tablet:h-auto">
            <iframe
              width="100%"
              height="100%"
              title="map"
              scrolling="no"
              src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};
export default GetInTouch;
