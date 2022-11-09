import React, { useState } from "react";
import "./style.css";

export const NewAndPopularKids = () => {
  const [activate , setActivate] = useState('')
  const makeBig= () =>{
setActivate('activate')
  }
  return (
    <div className="main">
      <h1>New and Popular</h1>
      <div className="movie_row">
        <h2 onClick={makeBig}>Top 10 in Kids in Nigeria Today</h2>
        <div className="movie_slide__container">
          <div className={`movie_slide ${activate}`}>
            <div className="movie_slide__number"></div>
            <div className="movie"></div>
          </div>
          <div className="movie_slide">
            <div className="movie_slide__number"></div>
            <div className="movie"></div>
          </div>
          <div className="movie_slide"></div>
          <div className="movie_slide"></div>
          <div className="movie_slide"></div>
        </div>
      </div>
      <div className="movie_row">
        <h3>Coming Next Week</h3>
        <div className="movie_slide__container">
          <div className="movie_slide style_2"></div>
          <div className="movie_slide style_2"></div>
          <div className="movie_slide style_2"></div>
          <div className="movie_slide style_2"></div>
          <div className="movie_slide style_2"></div>
        </div>
      </div>
      <div className="movie_row">
        <h3>Coming This Week</h3>
        <div className="movie_slide__container">
          <div className="movie_slide style_2"></div>
          <div className="movie_slide style_2"></div>
          <div className="movie_slide style_2"></div>
          <div className="movie_slide style_2"></div>
          <div className="movie_slide style_2"></div>
        </div>
      </div>
      <div className="movie_row">
        <h3>Worth The Wait</h3>
        <div className="movie_slide__container">
          <div className="movie_slide style_2"></div>
          <div className="movie_slide style_2"></div>
          <div className="movie_slide style_2"></div>
          <div className="movie_slide style_2"></div>
          <div className="movie_slide style_2"></div>
        </div>
      </div>
    </div>
  );
};
