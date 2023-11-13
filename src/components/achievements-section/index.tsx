import { Grid, Typography } from "@mui/material";
import Odometer from "react-odometerjs";
import { achievementMetaData } from "./meta";
import "odometer/themes/odometer-theme-default.css";
import { useEffect, useState } from "react";
import FadeInWhenVisible from "../fade-in-visible";

const OdometerComp = ({ data }: any) => {
  const [value, setValue] = useState<number>(0);
  const [scrollHeight, setScrollHeight] = useState<number>(0);

  useEffect(() => {
    scrollHeight > 600 && setValue(data);
  }, [data, scrollHeight]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollHeight(window.scrollY);
    });
    return () => {
      window.removeEventListener("scroll", () => {
        setScrollHeight(window.scrollY);
      });
    };
  }, []);

  return (
    <Odometer
      value={value}
      className="text-[3rem] font-semibold text-white"
      animation="count"
      duration={3000}
    />
  );
};

const AchievementsSection = () => {
  return (
    <FadeInWhenVisible>
      <Grid container columns={{ xs: 10, sm: 10, md: 12 }}>
        {achievementMetaData.map((data, index) => {
          return (
            <Grid
              item
              xs={5}
              sm={5}
              md={2.4}
              className="flex flex-col relative"
            >
              <div
                className="bg-fulvous w-full flex justify-center items-center py-[3rem] flex-col border-r border-gray"
                key={index}
              >
                <OdometerComp label={data.label} data={data.value} />
                <Typography className="text-white">{data.label}</Typography>
              </div>
            </Grid>
          );
        })}
      </Grid>
    </FadeInWhenVisible>
  );
};
export default AchievementsSection;
