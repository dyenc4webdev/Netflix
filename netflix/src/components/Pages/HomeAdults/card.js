import React from 'react';
import { FaCaretDown, FaPlayCircle, FaPlusCircle, FaRegThumbsUp, FaChevronCircleDown } from 'react-icons/fa';
import "./home.css";

function Card(props) {
    return(
        <div>
            <div>
                <div className='card'>
                    <a href={props.link} target="_blank">
                    <img src={props.imgs} alt="test"></img>
                    </a>
                    <div
                    style={{ display: "flex", justifyContent: "space-between", }}
                  >
                    <span
                      style={{
                        display: "none",
                        gap: "8px",
                        fontSize: "1.5rem",
                      }}
                    >
                      <FaPlayCircle />
                      <FaPlusCircle />
                      <FaRegThumbsUp />
                    </span>
                    <div style={{ fontSize: "1.5rem", display: "none" }}>
                      <FaChevronCircleDown />
                    </div>
                  </div>
                  <div style={{backgroundColor: "black", display: "none"}}>
                  <span style={{color: "limegreen", fontWeight: "bold"}}>97% Match</span>
                  <button style={{border: "1px solid grey", backgroundColor: "transparent", color: "white", padding: "3px"}}>18+</button>
                  <span>11 Seasons</span>
                  <button style={{border: "1px solid grey", backgroundColor: "transparent", color: "white", padding: "3px"}}>HD</button>
                  </div>
                  <div style={{display: 'none'}}>
                    <span>Suspenseful</span>
                    <span style={{textDecoration: "dot",}}>Exciting</span>
                    <span>Fantasy TV Show</span>
                  </div>
                </div>
            </div>
        </div>
    );
}

export default Card;