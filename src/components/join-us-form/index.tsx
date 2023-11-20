import {
  Dialog,
  IconButton,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import colorPalette from "../../helpers/color-palette";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../input";
import Button from "../button";
import CloseIcon from "@mui/icons-material/Close";
import { toast } from "react-toastify";
import { useState } from "react";
import { ReactComponent as EllipsisLoader } from "../../assets/icons/loader.svg";
import { EXCEL_SHEET_URL } from "../../helpers/utils";

const yupSchema = yup
  .object({
    name: yup.string().required("Name is required"),
    vehicleType: yup.string().required("This field is required"),
    email: yup
      .string()
      .email("Please enter valid email")
      .required("Email is required"),
    phone: yup
      .string()
      .max(10, "Please enter valid mobile number")
      .min(10, "Please enter valid mobile number")
      .required("Mobile number is required"),
    vehicleCount: yup.string().required("This field is required"),
    message: yup.string().required("This field is required"),
  })
  .required();

const JoinUsForm = ({ isOpen, onClose }: any) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<any>({ resolver: yupResolver(yupSchema), mode: "onSubmit" });
  const [loading, setLoading] = useState<boolean>(false);

  const onSubmit: SubmitHandler<any> = async (data) => {
    setLoading(true);
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("mobile", data.phone);
    formData.append("email", data.email);
    formData.append("message", data.message);
    formData.append("vehicleType", data.vehicleType);
    formData.append("vehicleCount", data.vehicleCount);
    formData.append("type", "joinUs");

    fetch(EXCEL_SHEET_URL, {
      method: "POST",
      body: formData,
      mode: "no-cors",
    })
      .then((res) => {
        setLoading(false);
        toast("Successfully Submitted your details", {
          type: "success",
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: true,
        });
        reset();
        onClose();
      })
      .catch((data) => console.log(data));
  };

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      className=" rounded-sm"
      maxWidth="sm"
      fullWidth
    >
      <IconButton
        aria-label="close"
        onClick={onClose}
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
          color: colorPalette.gray,
        }}
      >
        <CloseIcon />
      </IconButton>
      <div className="flex flex-col gap-4  p-6">
        <Typography color={colorPalette.black} fontWeight={600} fontSize={24}>
          Write to Us
        </Typography>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-5 flex-1"
        >
          <Input
            name="name"
            register={register}
            placeholder="Your Name"
            error={errors.name?.message?.toString()}
            className="flex-1"
            label="Name"
          />
          <Input
            name="phone"
            register={register}
            placeholder="Mobile Number"
            error={errors.phone?.message?.toString()}
            className="flex-1"
            label="Mobile"
          />

          <Input
            name="email"
            placeholder="Email"
            register={register}
            error={errors.email?.message?.toString()}
            className="flex-1"
            label="Email"
          />
          <div className="flex flex-col">
            <div className="flex justify-between">
              <div className="text-sm !font-semibold">Choose a vehicle</div>
              {errors.vehicleType?.message?.toString() && (
                <div className="text-red text-xs">
                  {errors.vehicleType?.message?.toString()}
                </div>
              )}
            </div>
            <Select {...register("vehicleType")} className="max-h-[40px]">
              <MenuItem value="Cab">Cab</MenuItem>
              <MenuItem value="Loader">Loader</MenuItem>
            </Select>
          </div>

          <Input
            name="vehicleCount"
            register={register}
            error={errors.vehicleCount?.message?.toString()}
            className="flex-1"
            label="Number of Vehicles"
          />
          <Input
            name="message"
            register={register}
            error={errors.vehicleCount?.message?.toString()}
            className="flex-1"
            label="Your Message"
          />
          {loading ? (
            <EllipsisLoader className="h-[48px]" />
          ) : (
            <Button
              variant="outlined"
              className="border w-fit py-4 !box-border !text-md !border-fulvous !text-fulvous hover:!bg-fulvous hover:!text-white"
              type="submit"
            >
              SUBMIT
            </Button>
          )}
        </form>
      </div>
    </Dialog>
  );
};
export default JoinUsForm;
