import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../config/api_config";
import { FaYoutube } from "react-icons/fa";
import Carousel from "./Carousel";

export default function MovieDetailSection() {
  const navigate = useNavigate();
  const { movie_id } = useParams();
  const [movie, setMovie] = useState();
  const { startPoint, key, endPoint, baseImgUrl } = api;

  useEffect(() => {
    getMovie();
  }, []);

  const getMovie = async () => {
    const { data } = await axios.get(
      startPoint + "/" + movie_id + "?api_key=" + key + endPoint
    );
    // console.log(data);
    setMovie(data);
  };

  return movie ? (
    <div className="pt-20 container w-full mx-auto bg-black flex flex-col md:flex-row items-center justify-between gap-10 px-5 py-16 md:px-16">
      <img
        className="w-[400px] md:w-[35%] rounded-lg"
        src={baseImgUrl + movie.poster_path}
        alt={movie.title}
      />
      <div className=" flex flex-col text-white items-center justify-center space-y-5">
        <p className="text-5xl text-center">
          {movie.title || movie.original_title}
        </p>
        <p className="text-xl">{movie.tagline}</p>
        <p>{movie.overview}</p>
        {/* updates -> add container */}
        <div className="container w-[90vw] xl:max-w-2xl border-2">
          <Carousel movie_id={movie.id} />
        </div>
        <button className="text-white w-full flex flex-row justify-center items-center gap-5 bg-myRed py-[5px] px-5 rounded-md">
          <FaYoutube size={40} /> Watch Trailer
        </button>
        <button
          onClick={() => navigate("/dashboard")}
          className="text-white w-full flex flex-row justify-center items-center gap-5 bg-black border-[5px] border-myRed py-[5px] px-5 rounded-md"
        >
          Back to Dashboard
        </button>
      </div>
    </div>
  ) : (
    <div className="h-[100vh] bg-black"></div>
  );
}
