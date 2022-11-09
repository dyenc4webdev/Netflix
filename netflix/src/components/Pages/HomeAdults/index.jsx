import React from "react";
import { AdultNav } from "../../molecules";
// import title from "../../../Asset/movie-title.webp";


export const HomeAdults = () => {
    return (
        <div>
            <img style={{position: "absolute", backgroundPosition: "50%", backgroundSize: "cover", }} src="https://occ-0-5543-1167.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABd_L7KhKv-boEv-KvVaoFT3bcBwDpTm0FUNg1Gd3iMOj-2WQIqDsob8p5XUsIO0FsgpuoIXkkYFjPkC6eq9IDHRvlUFQD1IS_cqy.webp?r=ede" alt="hero-banner" />
            <AdultNav />
        </div>
    );
}