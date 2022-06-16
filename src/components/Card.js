import React from "react";
import api from "../config/api_config";

export default function Card({ movie }) {
  const {
    title,
    original_title,
    vote_average,
    backdrop_path,
    poster_path,
    release_date,
  } = movie;
  return (
    <div>
      <img
        className=" w-[400px] md:w-[180px]"
        src={api.baseImgUrl + backdrop_path}
        alt={title}
      />
    </div>
  );
}
