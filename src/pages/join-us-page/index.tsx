import { Typography } from "@mui/material";
import ClientSays from "../../components/join-us";
import Layout from "../../components/layout";
import Button from "../../components/button";
import { ReactComponent as Join } from "../../assets/icons/join.svg";
import { useState } from "react";
import JoinUsForm from "../../components/join-us-form";

const JoinUsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  return (
    <Layout>
      <div className="flex flex-col ">
        <div className="tablet:px-[10rem] px-4 py-[5rem] pt-[10rem] flex gap-6 bg-black items-start flex-col relative">
          <div className="flex flex-col gap-2">
            <Typography className="text-fulvous" fontSize={14} fontWeight={500}>
              GET IN TOUCH
            </Typography>
            <Typography className="text-white" fontSize={30} fontWeight={600}>
              Join Us to get best transport services.
            </Typography>
          </div>
          <Button
            className="!bg-fulvous h-[3rem] !text-white !px-8 w-fit"
            onClick={() => setIsModalOpen(true)}
          >
            JOIN WITH US
          </Button>
          <Join className="absolute right-0 bottom-0 h-[50%]" />
        </div>
        <ClientSays />
        {isModalOpen && (
          <JoinUsForm
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        )}
      </div>
    </Layout>
  );
};
export default JoinUsPage;
