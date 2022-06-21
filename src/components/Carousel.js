import React, { useEffect, useState } from "react";
import axios from "axios";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import api from "../config/api_config";

export default function Carousel({ movie_id }) {
  const [credits, setCredits] = useState([]);
  const { startPoint, key, endPoint, baseImgUrl } = api;

  const responsive = {
    0: {
      items: 3,
    },
    512: {
      items: 5,
    },
  };

  useEffect(() => {
    getCredits();
  }, []);

  const getCredits = async () => {
    const {
      data: { cast },
    } = await axios.get(
      startPoint + "/" + movie_id + "/credits?api_key=" + key + endPoint
    );

    // console.log(cast);
    setCredits(cast);
  };

  const items = credits.map(c => (
    <div className="flex flex-col object-contain p-2 items-center justify-center text-center">
      <img
        className="rounded-md max-w-[100px]"
        src={baseImgUrl + c.profile_path}
      />
      <p>{c.original_name || c.name}</p>
    </div>
  ));

  return (
    <AliceCarousel
      mouseTracking
      infinite
      disableDotsControls
      disableButtonsControls
      autoPlay
      items={items}
      responsive={responsive}
    />
  );
}
