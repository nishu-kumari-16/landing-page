import SearchBackground from "../../assets/icons/bg-shorten-desktop.svg";
import FadeInWhenVisible from "../fade-in-visible";
import AdvancedStatistics from "./advancedStatistics";

const SearchContainer = () => {
  return (
    <FadeInWhenVisible>
      <div className="flex flex-col gap-6  mt-[-5rem] mx-[1.5rem] tablet:mx-[6rem]">
        <div className="flex flex-col px-4 tablet:px-[4rem] items-center justify-center flex-1 rounded-xl relative bg-darkViolet h-full w-full min-h-[10rem] overflow-hidden ">
          <AdvancedStatistics />
          <img
            src={SearchBackground}
            className="absolute top-0 left-0 right-0 bottom-0 w-full h-full"
            alt="search-bg"
          />
        </div>
      </div>
    </FadeInWhenVisible>
  );
};
export default SearchContainer;
