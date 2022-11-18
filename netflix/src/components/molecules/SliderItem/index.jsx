import { useState } from "react";
import { FaAngleDown, FaPlay, FaPlus, FaThumbsUp } from "react-icons/fa";
import { Button, Image } from "../../atoms";
import "./index.css";

export const SliderItem = () => {
  const [isHovering, setIsHovering] = useState(false);
  const trailer = "https://youtu.be/RvehqgXKvmM";
  return (
    <div
      onMouseOver={() => setIsHovering(true)}
      onMouseOut={() => setIsHovering(false)}
      className="slider-item bg-black "
    >
      <Image
        src="https://occ-0-299-1490.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABaXUvJFNirJqOtr1YNsul8CZULqZSiNdxWE5z6g6aSXZsYEGPfAn0ondQYHfM_cPHwpUeuLhuyDeeC6A9SubfF1MGaifq9iAbox4OWT5w1gmmlvoZhLf-CytOXI6gD5x6V0R8h6hYwTBoNnCRsClbDeoi5plCpXPLsIJvuXbjS3S7hGkFekpk71lWwzlXLk.jpg?r=156"
        alt=""
      />
      {isHovering && (
        <>
          <video src="https://youtu.be/RvehqgXKvmM" autoPlay={true} loop />
          <video src={trailer} autoPlay={true} loop />
          <div className="row p-20 bg-black">
            <div className="row col-4">
              <Button className="btn d-flex align-center">
                <FaPlay />
              </Button>
              <Button className="btn d-flex align-center transparent-btn text-white">
                <FaPlus />
              </Button>
              <Button className="btn d-flex align-center transparent-btn text-white">
                <FaThumbsUp />
              </Button>
            </div>
            <div>
              <Button className="btn d-flex align-center transparent-btn text-white">
                <FaAngleDown />
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

