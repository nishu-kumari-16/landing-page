import { Typography } from "@mui/material";
import colorPalette from "../../helpers/color-palette";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../input";
import Button from "../button";
import { toast } from "react-toastify";
import { ReactComponent as EllipsisLoader } from "../../assets/icons/loader.svg";
import { useState } from "react";

const yupSchema = yup
  .object({
    firstName: yup.string().required("First Name is required"),
    lastName: yup.string().required("Last Name is required"),
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

const ContactUsForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<any>({ resolver: yupResolver(yupSchema), mode: "onSubmit" });

  const [loading, setLoading] = useState<boolean>(false);

  const onSubmit: SubmitHandler<any> = async (data) => {
    setLoading(true);
    const formData = new FormData();
    formData.append("firstName", data.firstName);
    formData.append("lastName", data.lastName);
    formData.append("phone", data.phone);
    formData.append("email", data.email);
    formData.append("message", data.message);
    formData.append("type", "contactUs");

    fetch(
      "https://script.google.com/macros/s/AKfycbyjK47PipHLjvPLvY0su8IMcByz-uSkA7_0-nn7dSnRmBaSCuDie2aY4RRnUBhKJo4clQ/exec",
      {
        method: "POST",
        body: formData,
        mode: "no-cors",
      }
    )
      .then((res) => {
        setLoading(false);
        toast("Successfully Submitted your details", {
          type: "success",
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: true,
        });
        reset();
        console.log(res.text());
      })
      .catch((data) => console.log(data));
  };
  return (
    <div className="flex flex-col gap-4">
      <Typography color={colorPalette.black} fontWeight={600} fontSize={24}>
        Contact Us
      </Typography>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 flex-1"
      >
        <div className="flex gap-4">
          <Input
            name="firstName"
            register={register}
            placeholder="First Name"
            error={errors.firstName?.message?.toString()}
            className="flex-1"
          />
          <Input
            name="lastName"
            register={register}
            placeholder="Last Name"
            error={errors.lastName?.message?.toString()}
            className="flex-1"
          />
        </div>
        <div className="flex gap-4">
          <Input
            name="email"
            placeholder="Email"
            register={register}
            error={errors.email?.message?.toString()}
            className="flex-1"
          />
          <Input
            name="phone"
            type="tel"
            placeholder="Phone Number"
            register={register}
            error={errors.phone?.message?.toString()}
            className="flex-1"
          />
        </div>
        {errors.message?.message?.toString() && (
          <div className="text-red text-sm">
            {errors.message?.message?.toString()}
          </div>
        )}
        <textarea
          {...register("message")}
          cols={3}
          placeholder="Message"
          className={` flex-1 border border-darkGray outline-none px-4 py-2 !text-sm rounded-md ${
            errors.message?.message?.toString() && "!border-red"
          } `}
        />
        {loading ? (
          <EllipsisLoader className="h-[50px]" />
        ) : (
          <Button
            type="submit"
            className="px-8 !bg-fulvous !text-white !capitalize !w-fit"
          >
            Send Message
          </Button>
        )}
      </form>
    </div>
  );
};
export default ContactUsForm;
