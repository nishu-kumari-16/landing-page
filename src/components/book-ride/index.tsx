import FadeInWhenVisible from "../fade-in-visible";
import Car from "../../assets/icons/car.png";
import { Button, Grid, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/PersonOutlineOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import SellOutlinedIcon from "@mui/icons-material/SellOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import MuiInput from "../input/muiInput";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";

const yupSchema = yup
  .object({
    name: yup.string().required("Name is required"),
    category: yup.string().required("Category is required"),
    startDestination: yup.string().required("Category is required"),
    endDestination: yup.string().required("Category is required"),
    date: yup.string().required("Date is required"),
    time: yup.string().required("Time is required"),
    personCount: yup.string().required("This field is required"),
    email: yup
      .string()
      .email("Please enter valid email")
      .required("Email is required"),
    phone: yup
      .string()
      .max(10, "Please enter valid mobile number")
      .min(10, "Please enter valid mobile number")
      .required("Mobile number is required"),
    message: yup.string().required("Message is required"),
  })
  .required();

const BookYourTaxiRide = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<any>({ resolver: yupResolver(yupSchema), mode: "onSubmit" });

  const onSubmit: SubmitHandler<any> = (data) => {
    toast("🦄Successfully Submitted your details", {
      type: "success",
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: true,
    });
  };

  return (
    <FadeInWhenVisible>
      <div
        className="flex flex-col gap-6  mt-[-5rem] mx-[1.5rem] tablet:mx-[6rem]  overflow-hidden "
        id="book-ride"
      >
        <div className="flex flex-col items-center justify-center flex-1 rounded-xl relative bg-codGray h-full w-full min-h-[30rem] py-4 overflow-hidden ">
          <div className="w-[70%] flex flex-wrap flex-col gap-8 self-end px-6 z-[3]">
            <Typography className="text-fulvous !font-bold" fontSize={16}>
              {`/// ONLINE BOOKING`}
            </Typography>
            <Typography className="text-white !font-bold" fontSize={36}>
              Book Your Taxi Ride
            </Typography>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-wrap flex-col gap-8 self-end px-6 z-[3]"
            >
              <Grid
                container
                spacing={4}
                columns={{ xs: 3, sm: 6, md: 12 }}
                className=" px-4"
              >
                <MuiInput
                  endAdornment={<PersonIcon className="text-fulvous " />}
                  placeholder="Enter name"
                  {...register?.("name")}
                  errors={errors.name?.message?.toString()}
                />
                <MuiInput
                  endAdornment={<EmailOutlinedIcon className="text-fulvous " />}
                  placeholder="Enter email"
                  {...register?.("email")}
                  errors={errors.email?.message?.toString()}
                />
                <MuiInput
                  endAdornment={<SellOutlinedIcon className="text-fulvous " />}
                  placeholder="Enter category"
                  {...register?.("category")}
                  errors={errors.category?.message?.toString()}
                />

                <MuiInput
                  endAdornment={
                    <PeopleOutlinedIcon className="text-fulvous " />
                  }
                  errors={errors.personCount?.message?.toString()}
                  placeholder="No of person"
                  type="number"
                  {...register?.("personCount")}
                />
                <MuiInput
                  endAdornment={
                    <LocationOnOutlinedIcon className="text-fulvous " />
                  }
                  errors={errors.startDestination?.message?.toString()}
                  {...register?.("startDestination")}
                  placeholder="Start Destination"
                />
                <MuiInput
                  endAdornment={
                    <LocationOnOutlinedIcon className="text-fulvous " />
                  }
                  errors={errors.endDestination?.message?.toString()}
                  {...register?.("endDestination")}
                  placeholder="End Destination"
                />

                <MuiInput
                  endAdornment={
                    <CalendarMonthOutlinedIcon className="text-fulvous " />
                  }
                  type="date"
                  {...register?.("date")}
                  errors={errors.date?.message?.toString()}
                  placeholder="Enter Date"
                />
                <MuiInput
                  endAdornment={
                    <AccessTimeOutlinedIcon className="text-fulvous " />
                  }
                  placeholder="Enter Time"
                  errors={errors.time?.message?.toString()}
                  {...register?.("time")}
                />
                <Grid
                  item
                  className="flex-[2] flex !flex-col gap-4 !text-left"
                  xs={3}
                  sm={3}
                  md={4}
                >
                  <Button
                    variant="contained"
                    type="submit"
                    className="!bg-fulvous max-h-[48px]  !capitalize flex-1"
                  >
                    Book your Taxi
                  </Button>
                </Grid>
              </Grid>
            </form>
          </div>

          <div className="absolute top-0 left-0 w-[30%] bottom-0 h-full bg-fulvous"></div>
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
