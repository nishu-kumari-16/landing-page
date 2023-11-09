import Layout from "../../components/layout";
import MapBackground from "../../assets/icons/map-bg.png";
import { Typography } from "@mui/material";
import colorPalette from "../../helpers/color-palette";
import { contactUsMetaData } from "./meta";
import ContactUsForm from "../../components/contact-us-form";

const ContactUs = () => {
  return (
    <Layout>
      <div className="overflow-hidden flex-1 h-96 tablet:h-auto mt-0 tablet:mt-[6rem] ">
        <iframe
          width="100%"
          height="300px"
          title="map"
          src="https://maps.google.com/maps?width=100%&amp;height=800&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>
      <div className="flex pr-4 tablet:pr-[8rem] flex-wrap relative gap-8 overflow-hidden ">
        <img
          src={MapBackground}
          className="absolute top-0 left-0 right-0 w-[50%] opacity-[0.3]"
          alt="map"
        />
        <div className="flex-1 flex-col flex gap-2 z-[2] bg-[rgba(255,255,255,0.4)] pl-4 tablet:pl-[8rem] pt-[5rem] pb-0 tablet:pb-[5rem]">
          <Typography color={colorPalette.black} fontWeight={600} fontSize={24}>
            Have Any Questions?
          </Typography>
          <Typography className="text-charcoalGray" fontSize={14}>
            Get in touch to discuss your employee wellbeing needs today. Please
            give us a call, drop us an email or fill out the contact form.
          </Typography>
          {contactUsMetaData.map((data, index) => (
            <div className="flex gap-4 " key={index}>
              <div className="flex w-[2rem] h-[2rem] justify-center items-center bg-black">
                {data.icon}
              </div>
              <div className="flex flex-col justify-between">
                <Typography className="text-charcoalGray" fontSize={12}>
                  {data.title}
                </Typography>
                <Typography className="text-charcoalGray" fontSize={12}>
                  {data.subText}
                </Typography>
              </div>
            </div>
          ))}
        </div>
        <div className="flex-1 pb-[5rem] pt-0 tablet:pt-[5rem]">
          <ContactUsForm />
        </div>
      </div>
    </Layout>
  );
};
export default ContactUs;
