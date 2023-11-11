import Layout from "../../components/layout";
import CareersImage from "../../assets/icons/careers-banner.jpg";
import { Grid } from "@mui/material";
import { careersMetaData } from "./meta";
import CareersCard from "./card";
import { useState } from "react";
import CareersForm from "../../components/careers-form";

const Careers = () => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedJob, setSelectedJob] = useState<any>(null);
  const onApply = (data: any) => {
    setSelectedJob(data);
    setModalOpen(true);
  };

  const onClose = () => {
    setSelectedJob(null);
    setModalOpen(false);
  };

  return (
    <Layout>
      <div className="flex flex-col ">
        <img
          src={CareersImage}
          alt="careers banner"
          className="h-[200px] mt-[5rem]"
        />
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          className=" px-4 tablet:px-[8rem] py-[4rem]"
        >
          {careersMetaData.map((data, index) => (
            <Grid item xs={4} sm={4} md={4}>
              <CareersCard {...data} key={index} onApply={onApply} />
            </Grid>
          ))}
        </Grid>
        {isModalOpen && (
          <CareersForm
            job={selectedJob?.type}
            isOpen={isModalOpen}
            onClose={onClose}
          />
        )}
      </div>
    </Layout>
  );
};
export default Careers;
