import { useState } from "react";
import { useRef } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Text } from "../../atoms";
import { SliderItem } from "../../molecules";
import "./index.css";
export const CategorySlide = () => {
  const [isClicked, setisClicked] = useState(false);
  const slideRef = useRef();
  const handleClick = (direction) => {
    setisClicked(true);
    let currentDistance = slideRef.current.getBoundingClientRect().x - 40;
    if (direction === "left") {
      slideRef.current.style.transform = `translateX(${
        650 + currentDistance
      }px)`;
    }
    if (direction === "right") {
      slideRef.current.style.transform = `translateX(${
        -650 + currentDistance
      }px)`;
    }
  };
  return (
    <div className="category ">
      <Text type="h2" className=" m-r-40  text-white">
        <a href="/browse/m/genre/2638104">
          <Text className="text-white">International Shows</Text>
          {/* <Text class="see-all-link">Explore All</Text> */}
        </a>
      </Text>
      <div className="wrapper">
        <FaAngleLeft
          className="text-white slider-icon left"
          onClick={() => handleClick("left")}
          style={{ display: !isClicked && "none" }}
        />
        <div className="slider d-flex  m-r-40" ref={slideRef}>
          <SliderItem />
          <SliderItem />
          <SliderItem />
          <SliderItem />
          <SliderItem />
          <SliderItem />
          <SliderItem />
          <SliderItem />
          <SliderItem />
          <SliderItem />
        </div>
        <FaAngleRight
          className="text-white slider-icon right"
          onClick={() => {
            handleClick("right");
          }}
        />
      </div>
    </div>
  );
};
