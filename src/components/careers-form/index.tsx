import { Dialog, IconButton, Typography } from "@mui/material";
import colorPalette from "../../helpers/color-palette";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../input";
import Button from "../button";
import { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { toast } from "react-toastify";
import { ReactComponent as EllipsisLoader } from "../../assets/icons/loader.svg";
import { EXCEL_SHEET_URL } from "../../helpers/utils";

const yupSchema = yup
  .object({
    name: yup.string().required("Name is required"),
    job: yup.string().required("Job is required"),
    email: yup
      .string()
      .email("Please enter valid email")
      .required("Email is required"),
    phone: yup
      .string()
      .max(10, "Please enter valid mobile number")
      .min(10, "Please enter valid mobile number")
      .required("Mobile number is required"),
    gender: yup.string().required("Gender is required"),
    experience: yup.string().required("Experience Level is required"),
    resume: yup.mixed().required("Resume link is required"),
  })
  .required();

//service id: service_ggr6r4e

const CareersForm = ({ isOpen, onClose, job }: any) => {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<any>({ resolver: yupResolver(yupSchema), mode: "onSubmit" });

  const [loading, setLoading] = useState<boolean>(false);

  const onSubmit: SubmitHandler<any> = async (data) => {
    setLoading(true);
    const file = data.resume[0];
    const fr = new FileReader();
    fr.readAsArrayBuffer(file);
    fr.onload = (f) => {
      const url =
        "https://script.google.com/macros/s/AKfycbyzOtHM5n1jvehM4-MCBOYJboJ2ZPXRdaZnQyt3P2qYhGYybbcEVpdwwaoSpr3mULAE/exec";
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        key !== "resume" && formData.append(key, value as any);
      });
      const qs = new URLSearchParams({
        filename: data.resume[0].name || file.name,
        mimeType: file.type,
        excelData: JSON.stringify(data),
      });
      fetch(`${url}?${qs}`, {
        method: "POST",
        body: JSON.stringify([...new Int8Array(f.target!.result as any)]),
        mode: "no-cors",
      }).then((res) => {
        setLoading(false);
        toast("Successfully Submitted your details", {
          type: "success",
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: true,
        });

        reset();
        onClose();
      });
      // .then((res) => res.json())
      // .then(
      //   (
      //     e // setLoading(true);
      //   ) => {
      //     formData.append("type", "careers");
      //     formData.append("resume", e.fileUrl);

      //     fetch(EXCEL_SHEET_URL, {
      //       method: "POST",
      //       body: formData,
      //       mode: "no-cors",
      //     })
      //       .then((res) => {
      //         setLoading(false);
      //         toast("Successfully Submitted your details", {
      //           type: "success",
      //           position: "top-center",
      //           autoClose: 5000,
      //           hideProgressBar: true,
      //         });

      //         reset();
      //         onClose();
      //       })
      //       .catch((data) =>
      //         toast("something went wrong. please try again!!", {
      //           type: "error",
      //           position: "top-center",
      //           autoClose: 5000,
      //           hideProgressBar: true,
      //         })
      //       );
      //   }
      // )
      // .catch((err) =>
      //   toast("something went wrong. please try again!!", {
      //     type: "error",
      //     position: "top-center",
      //     autoClose: 5000,
      //     hideProgressBar: true,
      //   })
      // );
    };
  };

  useEffect(() => {
    setValue("job", job);
  }, [job, setValue]);

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
          Apply for this opportunity
        </Typography>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-5 flex-1"
        >
          <Input
            name="phone"
            register={register}
            placeholder="Mobile Number"
            error={errors.phone?.message?.toString()}
            className="flex-1"
            label="Phone"
          />
          <Input
            name="name"
            register={register}
            placeholder="Your Name"
            error={errors.name?.message?.toString()}
            className="flex-1"
            label="Your Name"
          />
          <Input
            name="email"
            placeholder="Email"
            register={register}
            error={errors.email?.message?.toString()}
            className="flex-1"
            label="Email"
          />
          <div className="flex flex-col gap-2">
            <div className="flex justify-between">
              <div className="text-sm !font-semibold">Gender</div>
              {errors.gender?.message?.toString() && (
                <div className="text-red text-xs">
                  {errors.gender?.message?.toString()}
                </div>
              )}
            </div>
            <div className="flex gap-3">
              <div className="flex gap-2 items-center">
                <input
                  {...register("gender")}
                  type="radio"
                  value="Male"
                  className="!text-black"
                />
                <Typography fontSize={14}>Male</Typography>
              </div>
              <div className="flex gap-2 items-center">
                <input
                  {...register("gender")}
                  type="radio"
                  value="Female"
                  className="!text-black"
                />
                <Typography fontSize={14}>Female</Typography>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between">
              <div className="text-sm !font-semibold">Experience Level</div>
              {errors.experience?.message?.toString() && (
                <div className="text-red text-xs">
                  {errors.experience?.message?.toString()}
                </div>
              )}
            </div>
            <div className="flex gap-3">
              <div className="flex gap-2 items-center">
                <input
                  {...register("experience")}
                  type="radio"
                  value="Fresher"
                  className="!text-black"
                />
                <Typography fontSize={14}>Fresher</Typography>
              </div>
              <div className="flex gap-2 items-center">
                <input
                  {...register("experience")}
                  type="radio"
                  value="Experienced"
                  className="!text-black"
                />
                <Typography fontSize={14}>Experienced</Typography>
              </div>
            </div>
          </div>
          <Input
            name="job"
            register={register}
            disabled
            value={job}
            className="flex-1"
            label="Job"
          />
          <Input
            name="resume"
            register={register}
            type="file"
            className="flex-1"
            placeholder="Paste your resume link here"
            label="Resume"
          />
          {loading ? (
            <EllipsisLoader className="h-[48px]" />
          ) : (
            <Button
              variant="outlined"
              className="border w-full py-4 !box-border !text-md !border-fulvous !text-fulvous hover:!bg-fulvous hover:!text-white"
              type="submit"
            >
              APPLY
            </Button>
          )}
        </form>
      </div>
    </Dialog>
  );
};
export default CareersForm;
