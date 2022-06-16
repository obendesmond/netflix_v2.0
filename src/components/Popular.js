import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import api from "../config/api_config";
import DashboardSection from "./DashboardSection";

export default function Popular() {
  const { startPoint, endPoint, key, popularMovies } = api;
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getPopularMovies();
  }, []);

  const getPopularMovies = async () => {
    const {
      data: { results },
    } = await axios.get(startPoint + popularMovies + key + endPoint);

    setMovies(results);
  };

  return <DashboardSection movies={movies} title="Most Popular Movies" />;
}
