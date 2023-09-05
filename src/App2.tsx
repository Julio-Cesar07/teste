import { useNavigate } from "react-router-dom";
import { SwiperProps } from "swiper/react";
import Slider from "./Slider";

export function App2() {
  const navigate = useNavigate();

  const seettings: SwiperProps = {
    spaceBetween: 50,
    slidesPerView: 3,
  };

  return (
    <>
      <Slider
        settings={{ spaceBetween: 50, slidesPerView: 2 }}
        children={
          <>
            {" "}
            <p>oi</p> <p>oi</p> <p>oi</p>
          </>
        }
      ></Slider>
    </>
  );
}
