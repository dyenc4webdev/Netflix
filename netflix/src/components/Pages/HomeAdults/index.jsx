import React from "react";
import { AdultNav, Footer } from "../../molecules";
import title from "../../../assets/movie-title2.webp";
import {
  FaAngleLeft,
  FaAngleRight,
  FaInfoCircle,
  FaPlay,
} from "react-icons/fa";
import "./home.css";
import Card from "./card";
import Data from "./data";

export const HomeAdults = () => {
  return (
    <>
      <div>
        <img
          style={{
            position: "absolute",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          src="https://occ-0-1168-1167.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABcr90E92rlkSBcKLFCJGwko1KgIeEoHJBczS1JgUrz0mMwstkOuTpZ-FvmJ4TT26UWDgo4-FJg9i-rDL6elH1WPeBjsn3NMOkCyB.webp?r=496"
          alt="hero-banner"
        />
        <AdultNav />
        <div
          style={{
            position: "absolute",
            width: "50%",
            padding: "0 50px",
            marginTop: "64px",
          }}
        >
          <img style={{ width: "85%" }} src={title} alt="hero-title" />
          <p
            style={{
              textShadow: "2px 2px 4px rgb(0 0 0 / 45%)",
              color: "white",
              width: "85%",
            }}
          >
            Dark secrets and mysterious connections among the passengers of the Kerberos come to light when they encounter a missing ship, the Prometheus.
          </p>
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: "32px", alignItems: "center" }}>
            <div style={{ display: "flex", gap: "16px" }}>
              <a style={{textDecoration: "none"}} href="https://www.netflix.com/watch/80234656?trackId=255824129">
              <button className="pri-btn"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "12px 24px",
                  fontWeight: "bold",
                  fontSize: "1rem",
                  borderRadius: "5px",
                  border: "none",
                }}
              >
                <FaPlay /> Play
              </button>
              </a>
              <a href="">
              <button className="pri-btn2"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "10px 24px",
                  fontWeight: "bold",
                  fontSize: "1rem",
                  borderRadius: "5px",
                  backgroundColor: "rgba(109, 109, 110, 0.7)",
                  color: "white",
                  border: "2px solid white",
                }}
              >
                <FaInfoCircle /> More Info
              </button>
              </a>
            </div>
            <p
              style={{
                color: "white",
                position: "absolute",
                right: "-630px",
                backgroundColor: "rgba(51,51,51,.6)",
                width: "70px",
                padding: "5px",
                border: "3px #dcdcdc",
                borderLeftStyle: "solid",
              }}
            >
              18+
            </p>
          </div>
        </div>
      </div>
      <div style={{ width: "100%", paddingLeft: "50px", height: "25vh", }}>
        <div
          style={{ width: "100%", position : "relative", marginTop: "480px", }}
        >
          <p className="banner-text" style={{ color: "white", marginTop: "50px", fontSize: "1.1rem", marginBottom: "16px", }}>
            Award-Winning TV Dramas
          </p>
          <div style={{}}>
            <div className="card-container"
              style={{
                display: "flex",
                overflow: "hidden",
                gap: "8px", 
                color: "white", borderRadius: "5px"
              }}
            >
              <Card
              imgs={Data[0] .image}
              link={Data[0] .link} />
              <Card
              imgs={Data[1] .image}
              link={Data[1] .link} />
              <Card
              imgs={Data[2] .image}
              link={Data[2] .link} />
              <Card
              imgs={Data[3] .image}
              link={Data[3] .link} />
              <Card
              imgs={Data[4] .image}
              link={Data[4] .link} />
              <Card
              imgs={Data[5] .image}
              link={Data[5] .link} />
              <Card
              imgs={Data[6] .image}
              link={Data[6] .link} />
              <Card
              imgs={Data[7] .image}
              link={Data[7] .link} />
              <Card
              imgs={Data[8] .image}
              link={Data[8] .link} />
              <Card
              imgs={Data[9] .image}
              link={Data[9] .link} />
              <Card
              imgs={Data[10] .image}
              link={Data[10] .link} />
              <Card
              imgs={Data[11] .image}
              link={Data[11] .link} />
              <Card
              imgs={Data[12] .image}
              link={Data[12] .link} />
            </div>
            <div style={{position: "relative", display: "flex", justifyContent: "space-between", color: "white", zIndex: "2", top: "-100px", fontSize: "3rem"}}>
              <FaAngleLeft />
              <FaAngleRight />
            </div>
          </div>    
        </div>
      </div>
      <div style={{ width: "100%", paddingLeft: "50px", height: "25vh", }}>
        <div
          style={{ width: "100%", position : "relative", marginTop: "50px", }}
        >
          <p className="banner-text" style={{ color: "white", marginTop: "50px", fontSize: "1.1rem", marginBottom: "16px", }}>
            Award-Winning TV Dramas
          </p>
          <div style={{}}>
            <div className="card-container"
              style={{
                display: "flex",
                overflow: "hidden",
                gap: "8px", 
                color: "white", borderRadius: "5px"
              }}
            >
              <Card
              imgs={Data[0] .image}
              link={Data[0] .link} />
              <Card
              imgs={Data[1] .image}
              link={Data[1] .link} />
              <Card
              imgs={Data[2] .image}
              link={Data[2] .link} />
              <Card
              imgs={Data[3] .image}
              link={Data[3] .link} />
              <Card
              imgs={Data[4] .image}
              link={Data[4] .link} />
              <Card
              imgs={Data[5] .image}
              link={Data[5] .link} />
              <Card
              imgs={Data[6] .image}
              link={Data[6] .link} />
              <Card
              imgs={Data[7] .image}
              link={Data[7] .link} />
              <Card
              imgs={Data[8] .image}
              link={Data[8] .link} />
              <Card
              imgs={Data[9] .image}
              link={Data[9] .link} />
              <Card
              imgs={Data[10] .image}
              link={Data[10] .link} />
              <Card
              imgs={Data[11] .image}
              link={Data[11] .link} />
              <Card
              imgs={Data[12] .image}
              link={Data[12] .link} />
            </div>
            <div style={{position: "relative", display: "flex", justifyContent: "space-between", color: "white", zIndex: "2", top: "-100px", fontSize: "3rem"}}>
              <FaAngleLeft />
              <FaAngleRight />
            </div>
          </div>    
        </div>
      </div>
      <div style={{ width: "100%", paddingLeft: "50px", height: "25vh", }}>
        <div
          style={{ width: "100%", position : "relative", marginTop: "50px", }}
        >
          <p className="banner-text" style={{ color: "white", marginTop: "50px", fontSize: "1.1rem", marginBottom: "16px", }}>
            Award-Winning TV Dramas
          </p>
          <div style={{}}>
            <div className="card-container"
              style={{
                display: "flex",
                overflow: "hidden",
                gap: "8px", 
                color: "white", borderRadius: "5px"
              }}
            >
              <Card
              imgs={Data[0] .image}
              link={Data[0] .link} />
              <Card
              imgs={Data[1] .image}
              link={Data[1] .link} />
              <Card
              imgs={Data[2] .image}
              link={Data[2] .link} />
              <Card
              imgs={Data[3] .image}
              link={Data[3] .link} />
              <Card
              imgs={Data[4] .image}
              link={Data[4] .link} />
              <Card
              imgs={Data[5] .image}
              link={Data[5] .link} />
              <Card
              imgs={Data[6] .image}
              link={Data[6] .link} />
              <Card
              imgs={Data[7] .image}
              link={Data[7] .link} />
              <Card
              imgs={Data[8] .image}
              link={Data[8] .link} />
              <Card
              imgs={Data[9] .image}
              link={Data[9] .link} />
              <Card
              imgs={Data[10] .image}
              link={Data[10] .link} />
              <Card
              imgs={Data[11] .image}
              link={Data[11] .link} />
              <Card
              imgs={Data[12] .image}
              link={Data[12] .link} />
            </div>
            <div style={{position: "relative", display: "flex", justifyContent: "space-between", color: "white", zIndex: "2", top: "-100px", fontSize: "3rem"}}>
              <FaAngleLeft />
              <FaAngleRight />
            </div>
          </div>    
        </div>
      </div>
      <div style={{ width: "100%", paddingLeft: "50px", height: "25vh", }}>
        <div
          style={{ width: "100%", position : "relative", marginTop: "50px", }}
        >
          <p className="banner-text" style={{ color: "white", marginTop: "50px", fontSize: "1.1rem", marginBottom: "16px", }}>
            Award-Winning TV Dramas
          </p>
          <div style={{}}>
            <div className="card-container"
              style={{
                display: "flex",
                overflow: "hidden",
                gap: "8px", 
                color: "white", borderRadius: "5px"
              }}
            >
              <Card
              imgs={Data[0] .image}
              link={Data[0] .link} />
              <Card
              imgs={Data[1] .image}
              link={Data[1] .link} />
              <Card
              imgs={Data[2] .image}
              link={Data[2] .link} />
              <Card
              imgs={Data[3] .image}
              link={Data[3] .link} />
              <Card
              imgs={Data[4] .image}
              link={Data[4] .link} />
              <Card
              imgs={Data[5] .image}
              link={Data[5] .link} />
              <Card
              imgs={Data[6] .image}
              link={Data[6] .link} />
              <Card
              imgs={Data[7] .image}
              link={Data[7] .link} />
              <Card
              imgs={Data[8] .image}
              link={Data[8] .link} />
              <Card
              imgs={Data[9] .image}
              link={Data[9] .link} />
              <Card
              imgs={Data[10] .image}
              link={Data[10] .link} />
              <Card
              imgs={Data[11] .image}
              link={Data[11] .link} />
              <Card
              imgs={Data[12] .image}
              link={Data[12] .link} />
            </div>
            <div style={{position: "relative", display: "flex", justifyContent: "space-between", color: "white", zIndex: "2", top: "-100px", fontSize: "3rem"}}>
              <FaAngleLeft />
              <FaAngleRight />
            </div>
          </div>    
        </div>
      </div>
      <div style={{ width: "100%", paddingLeft: "50px", height: "25vh", }}>
        <div
          style={{ width: "100%", position : "relative", marginTop: "50px", }}
        >
          <p className="banner-text" style={{ color: "white", marginTop: "50px", fontSize: "1.1rem", marginBottom: "16px", }}>
            Award-Winning TV Dramas
          </p>
          <div style={{}}>
            <div className="card-container"
              style={{
                display: "flex",
                overflow: "hidden",
                gap: "8px", 
                color: "white", borderRadius: "5px"
              }}
            >
              <Card
              imgs={Data[0] .image}
              link={Data[0] .link} />
              <Card
              imgs={Data[1] .image}
              link={Data[1] .link} />
              <Card
              imgs={Data[2] .image}
              link={Data[2] .link} />
              <Card
              imgs={Data[3] .image}
              link={Data[3] .link} />
              <Card
              imgs={Data[4] .image}
              link={Data[4] .link} />
              <Card
              imgs={Data[5] .image}
              link={Data[5] .link} />
              <Card
              imgs={Data[6] .image}
              link={Data[6] .link} />
              <Card
              imgs={Data[7] .image}
              link={Data[7] .link} />
              <Card
              imgs={Data[8] .image}
              link={Data[8] .link} />
              <Card
              imgs={Data[9] .image}
              link={Data[9] .link} />
              <Card
              imgs={Data[10] .image}
              link={Data[10] .link} />
              <Card
              imgs={Data[11] .image}
              link={Data[11] .link} />
              <Card
              imgs={Data[12] .image}
              link={Data[12] .link} />
            </div>
            <div style={{position: "relative", display: "flex", justifyContent: "space-between", color: "white", zIndex: "2", top: "-100px", fontSize: "3rem"}}>
              <FaAngleLeft />
              <FaAngleRight />
            </div>
          </div>    
        </div>
      </div>
      <Footer />
    </>
  );
};
