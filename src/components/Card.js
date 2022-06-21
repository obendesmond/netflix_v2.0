import React from "react";
import { useNavigate } from "react-router-dom";
import api from "../config/api_config";

export default function Card({ movie }) {
  const navigateTo = useNavigate();
  const {
    id,
    title,
    original_title,
    vote_average,
    backdrop_path,
    poster_path,
    release_date,
  } = movie;
  return (
    <div
      onClick={() => navigateTo(`/dashboard/${id}`)}
      className="hover:scale-150 duration-100 cursor-pointer flex flex-col justify-center items-center"
    >
      <img
        className=" w-[400px] md:w-[180px]"
        src={api.baseImgUrl + backdrop_path}
        alt={title}
      />
      <p className=" p-1 bg-black text-[10px] text-white text-center">
        {title || original_title}
      </p>
    </div>
  );
}
