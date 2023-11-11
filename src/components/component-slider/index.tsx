import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const ComponentSlider = ({ components }: { components: any[] }) => {
  const [sliderRef, keenSlider] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      slides: {
        origin: "center",
        perView: 1,
      },
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 5000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <div ref={sliderRef} className="keen-slider">
      {components.map((data, index) => data)}
    </div>
  );
};
export default ComponentSlider;
