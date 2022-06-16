import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";
import Popular from "../components/Popular";
import TopRated from "../components/TopRated";
import GrayBorder from "../components/GrayBorder";
import UpComing from "../components/UpComing";
import api from "../config/api_config";

export default function Dashboard() {
  const { startPoint, endPoint, key, upComing, baseImgUrl } = api;
  const [bgImg, setBgImg] = useState();

  useEffect(() => {
    getUpComingMovie();
  }, []);

  const getUpComingMovie = async () => {
    const {
      data: { results },
    } = await axios.get(startPoint + upComing + key + endPoint);

    const path = results[0].backdrop_path;
    const bg = baseImgUrl + path;
    console.log(path);
    console.log(bg);

    setBgImg(bg);
    console.log(bgImg);
  };

  return (
    <div>
      <Header isDashboard />
      <div
        style={{
          height: "60vh",
          width: "100vw",
          background: `linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0.8) 100% ), url('${bgImg}'})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          padding: "200px 0 0 0",
        }}
      >
        {/* <div className="text-white space-y-2 px-5 flex flex-col justify-center items-center md:space-y-6 text-center">
          <h1 className="text-2xl md:text-5xl font-bold">
            Unlimited movies, TV
            <br /> shows, and more.
          </h1>
          <p className="md:text-2xl">Watch anywhere. Cancel anytime.</p>
        </div> */}
      </div>
      <Popular />
      <TopRated />
      <UpComing />
      <GrayBorder />
    </div>
  );
}
