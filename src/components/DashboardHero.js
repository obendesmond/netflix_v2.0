import React, { useState, useEffect } from "react";
import axios from "axios";
import api from "../config/api_config";
import BlackSpace from "./BlackSpace";

export default function DashboardHero() {
  const { startPoint, endPoint, key, upComing, baseImgUrl } = api;
  const [bgImg, setBgImg] = useState();
  const [title, setTitle] = useState();

  useEffect(() => {
    getUpComingMovie();
  }, []);

  const getUpComingMovie = async () => {
    const {
      data: { results },
    } = await axios.get(startPoint + upComing + key + endPoint);

    const ran = Math.floor(Math.random() * 10);

    const path = results[ran].backdrop_path;
    const bg = baseImgUrl + path;

    setBgImg(bg);
    setTitle(results[ran].title);
  };

  return (
    <div>
      <BlackSpace />
      <div
        style={{
          height: "60vh",
          width: "100vw",
          background: `linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0.8) 100% ), url(${bgImg})`,
          backgroundSize: "contain",
          // backgroundRepeat: "no-repeat",
          // backgroundRepeat: "repeat-x",
          padding: "200px 0 0 0",
        }}
      >
        <div className="text-white space-y-2 px-5 flex flex-col justify-center items-center md:space-y-6 text-center">
          <h1 className="text-2xl md:text-5xl font-bold">
            Unlimited movies, TV
            <br /> shows, and more.
          </h1>
          <p className="md:text-2xl">Watch anywhere. Cancel anytime.</p>
          <button className="text-white bg-myRed py-[5px] px-5 rounded-md">
            Watch Trailer -&gt; {title}
          </button>
        </div>
      </div>
    </div>
  );
}
