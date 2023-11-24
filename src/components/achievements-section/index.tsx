import { Grid, Typography } from "@mui/material";
import Odometer from "react-odometerjs";
import "odometer/themes/odometer-theme-default.css";
import { useEffect, useState } from "react";
import FadeInWhenVisible from "../fade-in-visible";
import { fetchData } from "../../helpers/utils";
import { ReactComponent as Loader } from "../../assets/icons/loader.svg";

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
  const [achievementMetaData, setAchievementMetaData] = useState<any>();
  const convertToDesiredFormat = async () => {
    const url =
      "https://docs.google.com/spreadsheets/d/1-oIjzjFjdcHg4DaUGHnRdDdOON4RsfRZfFYWCZ5LYno/edit?usp=sharing";
    const data = await fetchData(url, 0);
    const result = data.slice(1).map((item: any) => ({
      label: item.B,
      value: item.C,
    }));
    setAchievementMetaData(result);
  };

  useEffect(() => {
    convertToDesiredFormat();
  }, []);
  return (
    <FadeInWhenVisible>
      <Typography
        className="text-center py-8  text-fulvous bg-offWhite font-bold"
        fontSize={20}
        fontWeight={600}
      >{`/// ACHIEVEMENTS`}</Typography>
      <Grid container columns={{ xs: 10, sm: 10, md: 12 }}>
        {achievementMetaData?.length ? (
          achievementMetaData.map((data: any, index: number) => {
            return (
              <Grid
                item
                xs={index === achievementMetaData.length - 1 ? 10 : 5}
                sm={index === achievementMetaData.length - 1 ? 10 : 5}
                md={2.4}
                key={index}
                className={`flex flex-col relative ${
                  index === achievementMetaData.length - 1 &&
                  "border-t border-t-mutedGray"
                }`}
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
          })
        ) : (
          <Loader />
        )}
      </Grid>
    </FadeInWhenVisible>
  );
};
export default AchievementsSection;
