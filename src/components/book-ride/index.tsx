import FadeInWhenVisible from "../fade-in-visible";
import Car from "../../assets/icons/car.png";
import { Button, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/PersonOutlineOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import SellOutlinedIcon from "@mui/icons-material/SellOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import MuiInput from "../input/muiInput";

const BookYourTaxiRide = () => {
  return (
    <FadeInWhenVisible>
      <div className="flex flex-col gap-6  mt-[-5rem] mx-[1.5rem] tablet:mx-[6rem]  overflow-hidden ">
        <div className="flex flex-col items-center justify-center flex-1 rounded-xl relative bg-codGray h-full w-full min-h-[30rem] py-4 overflow-hidden ">
          <div className="w-[70%] flex flex-wrap flex-col gap-8 self-end px-6 z-[3]">
            <Typography className="text-yellow !font-bold" fontSize={16}>
              {`/// ONLINE BOOKING`}
            </Typography>
            <Typography className="text-white !font-bold" fontSize={36}>
              Book Your Taxi Ride
            </Typography>
            <div className="flex gap-6 justify-end flex-col tablet:flex-row">
              <MuiInput
                endAdornment={<PersonIcon className="text-yellow " />}
                placeholder="Enter name"
                className="!bg-[#575859]"
              />
              <MuiInput
                endAdornment={<EmailOutlinedIcon className="text-yellow " />}
                placeholder="Enter email"
              />
              <MuiInput
                endAdornment={<SellOutlinedIcon className="text-yellow " />}
                placeholder="Enter category"
              />
            </div>
            <div className="flex gap-6 justify-end  flex-col tablet:flex-row">
              <MuiInput
                endAdornment={<PeopleOutlinedIcon className="text-yellow " />}
                placeholder="No of person"
              />
              <MuiInput
                endAdornment={
                  <LocationOnOutlinedIcon className="text-yellow " />
                }
                placeholder="Start Destination"
              />
              <MuiInput
                endAdornment={
                  <LocationOnOutlinedIcon className="text-yellow " />
                }
                placeholder="End Destination"
              />
            </div>
            <div className="flex gap-6 justify-end  flex-col tablet:flex-row">
              <MuiInput
                endAdornment={
                  <CalendarMonthOutlinedIcon className="text-yellow " />
                }
                type="date"
                placeholder="Enter Date"
              />
              <MuiInput
                endAdornment={
                  <AccessTimeOutlinedIcon className="text-yellow " />
                }
                placeholder="Enter Time"
              />
              <Button
                variant="contained"
                className="!bg-yellow  !capitalize flex-1"
              >
                Book your Taxi
              </Button>
            </div>
          </div>
          <div className="absolute top-0 left-0 w-[30%] bottom-0 h-full bg-yellow"></div>
          <img
            src={Car}
            className="absolute left-[-6rem] hidden tablet:flex"
            alt="car"
          />
        </div>
      </div>
    </FadeInWhenVisible>
  );
};
export default BookYourTaxiRide;
