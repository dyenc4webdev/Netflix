import React from "react";
import { FaSearch, FaBell, FaCaretDown } from "react-icons/fa";
import logo from "../../../assets/logo.svg";
import Profile from "../../../assets/profile1.png";
import "./adultnav.css";

export const AdultNav = () => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "rgb(20, 20, 20)",
        background: "transparent",
        color: "white",
        padding: "0 50px",
        height: "70px",
        position: "relative",
        zIndex: "2",
        fontSize: "0.85rem",
        backgroundImage:
          "linear-gradient(180deg,rgba(0,0,0,.7) 10%,transparent)",
        lineHeight: "1.2", cursor: "pointer"
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "32px" }}>
        <img
          style={{
            width: "100px",
            backgroundImage:
              "linear-gradient(180deg,rgba(0,0,0,.7) 10%,transparent)",
          }}
          src={logo}
          alt="logo"
        />
        <div style={{ display: "flex", gap: "16px" }}>
          <span style={{ fontWeight: "bold" }}>Home</span>
          <span className="inactive">TV Shows</span>
          <span className="inactive">Movies</span>
          <span className="inactive">New & Popular</span>
          <span className="inactive">My List</span>
          <span className="inactive">Browse by Languages</span>
        </div>
      </div>
      <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
        <FaSearch style={{ fontSize: "1.2rem" }} />
        <span>Kids</span>
        <FaBell style={{ fontSize: "1.2rem" }} />
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <img src={Profile} style={{width: "30px"}} />
          <FaCaretDown style={{ fontSize: "1.2rem" }} />
        </div>
      </div>
    </nav>
  );
};
