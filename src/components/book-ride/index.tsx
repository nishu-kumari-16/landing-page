import FadeInWhenVisible from "../fade-in-visible";
import Car from "../../assets/icons/car.png";
import { Button, Grid, MenuItem, Select, Typography } from "@mui/material";
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
import { CallOutlined } from "@mui/icons-material";
import BikeScooterIcon from "@mui/icons-material/BikeScooter";

const yupSchema = yup
  .object({
    name: yup.string().required("Name is required"),
    category: yup.string().required("Category is required"),
    bodyType: yup.string().when("category", (category: any, schema) => {
      if (category === "Loader")
        return schema.required("This field is required");
      return schema;
    }),
    startDestination: yup.string().required("This field is required"),
    endDestination: yup.string().required("This field is required"),
    date: yup.string().required("Date is required"),
    time: yup.string().required("Time is required"),
    personCount: yup.string().when("category", (category: any, schema) => {
      if (category === "Passenger")
        return schema.required("This field is required");
      return schema;
    }),
    tyresCount: yup.string().when("category", (category: any, schema) => {
      if (category === "Loader")
        return schema.required("This field is required");
      return schema;
    }),
    loadInTons: yup.string().when("category", (category: any, schema) => {
      if (category === "Loader")
        return schema.required("This field is required");
      return schema;
    }),
    email: yup
      .string()
      .email("Please enter valid email")
      .required("Email is required"),
    phone: yup
      .string()
      .max(10, "Please enter valid mobile number")
      .min(10, "Please enter valid mobile number")
      .required("Mobile number is required"),
  })
  .required();

const BookYourTaxiRide = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<any>({ resolver: yupResolver(yupSchema), mode: "onSubmit" });

  const onSubmit: SubmitHandler<any> = (data) => {
    toast("Successfully Submitted your details", {
      type: "success",
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: true,
    });
  };

  console.log(errors);

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

                <Grid
                  item
                  className="flex-[2] flex !flex-col gap-4 !text-left justify-end"
                  xs={3}
                  sm={3}
                  md={4}
                >
                  {errors.category?.message?.toString() && (
                    <div className="text-red text-xs">
                      {errors.category?.message?.toString()}
                    </div>
                  )}
                  <div className="relative flex flex-col gap-2 !bg-[#575859] rounded-lg">
                    {!watch("category") && (
                      <div className="absolute top-[6px]  text-mutedGray left-4 !font-serif opacity-70">
                        Select Category
                      </div>
                    )}
                    <Select
                      displayEmpty
                      {...register?.("category")}
                      className="max-h-[40px] w-full   !text-white"
                      endAdornment={
                        <SellOutlinedIcon className="text-fulvous " />
                      }
                    >
                      <MenuItem value="Loader">Loader</MenuItem>
                      <MenuItem value="Passenger">Passenger</MenuItem>
                    </Select>
                  </div>
                </Grid>
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
                  endAdornment={<CallOutlined className="text-fulvous " />}
                  placeholder="Enter Mobile"
                  type="tel"
                  {...register?.("phone")}
                  errors={errors.phone?.message?.toString()}
                />
                {watch("category") === "Passenger" && (
                  <MuiInput
                    endAdornment={
                      <PeopleOutlinedIcon className="text-fulvous " />
                    }
                    errors={errors.personCount?.message?.toString()}
                    placeholder="No of Passengers"
                    type="number"
                    {...register?.("personCount")}
                  />
                )}
                {watch("category") === "Loader" && (
                  <Grid
                    item
                    className="flex-[2] flex !flex-col gap-4 !text-left justify-end "
                    xs={3}
                    sm={3}
                    md={4}
                  >
                    {errors.bodyType?.message?.toString() && (
                      <div className="text-red text-xs">
                        {errors.bodyType?.message?.toString()}
                      </div>
                    )}
                    <div className="relative flex flex-col gap-2 !bg-[#575859] rounded-lg">
                      {!watch("bodyType") && (
                        <div className="absolute top-[6px]  text-mutedGray left-4 !font-serif opacity-70">
                          Body Type
                        </div>
                      )}
                      <Select
                        displayEmpty
                        {...register?.("bodyType")}
                        className="max-h-[40px] w-full   !text-white"
                        endAdornment={
                          <SellOutlinedIcon className="text-fulvous " />
                        }
                      >
                        <MenuItem value="Full Body">Full Body</MenuItem>
                        <MenuItem value="Half Body">Half Body</MenuItem>
                      </Select>
                    </div>
                  </Grid>
                )}
                {watch("category") === "Loader" && (
                  <MuiInput
                    endAdornment={
                      <PeopleOutlinedIcon className="text-fulvous " />
                    }
                    errors={errors.loadInTons?.message?.toString()}
                    placeholder="Load (in Tons)"
                    type="number"
                    {...register?.("loadInTons")}
                  />
                )}

                <MuiInput
                  endAdornment={<BikeScooterIcon className="text-fulvous " />}
                  errors={errors.tyresCount?.message?.toString()}
                  placeholder="No of Tyres"
                  type="number"
                  {...register?.("tyresCount")}
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
                <Grid
                  item
                  className="flex-[2] flex !flex-col gap-4 !text-left justify-end "
                  xs={3}
                  sm={3}
                  md={4}
                >
                  {errors.time?.message?.toString() && (
                    <div className="text-red text-xs">
                      {errors.time?.message?.toString()}
                    </div>
                  )}
                  <div className="relative flex flex-col gap-2 !bg-[#575859] rounded-lg">
                    {!watch("time") && (
                      <div className="absolute top-[6px]  text-mutedGray left-4 !font-serif opacity-70">
                        Select Time Slots
                      </div>
                    )}
                    <Select
                      displayEmpty
                      {...register?.("time")}
                      className="max-h-[40px] w-full   !text-white"
                      endAdornment={
                        <AccessTimeOutlinedIcon className="text-fulvous " />
                      }
                    >
                      <MenuItem value="00:00 to 04:00">00:00 to 04:00</MenuItem>
                      <MenuItem value="04:00 to 08:00">04:00 to 08:00</MenuItem>
                      <MenuItem value="08:00 to 12:00">08:00 to 12:00</MenuItem>
                      <MenuItem value="12:00 to 16:00">12:00 to 16:00</MenuItem>
                      <MenuItem value="16:00 to 20:00">16:00 to 20:00</MenuItem>
                      <MenuItem value="20:00 to 00:00">20:00 to 00:00</MenuItem>
                    </Select>
                  </div>
                </Grid>
                <Grid
                  item
                  className="flex-[2] flex !flex-col gap-4 !text-left justify-end "
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
