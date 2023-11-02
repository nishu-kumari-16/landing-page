import { ReactComponent as LoaderSvg } from "../../assets/icons/loaderAnimation.svg";

const Loader = () => {
  return (
    <div className="absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center">
      <LoaderSvg className="w-[50px] h-[50px]" />
    </div>
  );
};
export default Loader;
