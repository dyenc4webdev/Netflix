import { Image, Text } from "../../atoms";
import { VideoContol } from "../../molecules";
import "./index.css";
export const MovieScreen = () => {
  return (
    <>
      <div className="movie-screen">
        <Image
          src="https://occ-0-299-1490.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABaXUvJFNirJqOtr1YNsul8CZULqZSiNdxWE5z6g6aSXZsYEGPfAn0ondQYHfM_cPHwpUeuLhuyDeeC6A9SubfF1MGaifq9iAbox4OWT5w1gmmlvoZhLf-CytOXI6gD5x6V0R8h6hYwTBoNnCRsClbDeoi5plCpXPLsIJvuXbjS3S7hGkFekpk71lWwzlXLk.jpg?r=156"
          alt="picture"
          className="image"
        />
        <div className="container">
          <div style={{ width: "50%" }}>
            <Text type="h1" className="movie-title mb-20">
              Alchemy of Souls
            </Text>
            <Text type="p" className="mb-20">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Repudiandae repellat expedita eveniet eius placeat quam ea
              praesentium nobis labore aperiam quas quis dolore eaque, porro
              ullam! Molestiae incidunt mollitia tempore?
            </Text>
          </div>
          <VideoContol />
        </div>
      </div>
    </>
  );
};
