import Layout from "../../components/layout";
import CareersImage from "../../assets/icons/careers-banner.jpg";
import { Grid } from "@mui/material";
import CareersCard from "./card";
import { useEffect, useState } from "react";
import CareersForm from "../../components/careers-form";
import { fetchData } from "../../helpers/utils";
import { ReactComponent as EllipsisLoader } from "../../assets/icons/loader.svg";

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

  const [careersMetaData, setCareersMetaData] = useState<any>();
  const convertToDesiredFormat = async () => {
    const url =
      "https://docs.google.com/spreadsheets/d/19iSN5IH_bClpC3MAk6bR1kt1x5kpwV3k75yYzmmfd4c/edit?usp=sharing";
    const data = await fetchData(url, 1);
    const result = data.slice(1).map((item: any) => ({
      id: item.A || "",
      name: item.B || "",
      location: item.C || "",
      type: item.D || "",
      role: item.E || "",
    }));
    setCareersMetaData(result);
  };

  useEffect(() => {
    convertToDesiredFormat();
  }, []);

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
          {careersMetaData ? (
            careersMetaData.map((data: any, index: number) => (
              <Grid item xs={4} sm={4} md={4}>
                <CareersCard {...data} key={index} onApply={onApply} />
              </Grid>
            ))
          ) : (
            <EllipsisLoader />
          )}
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
