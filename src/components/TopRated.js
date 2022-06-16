import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import api from "../config/api_config";
import DashboardSection from "./DashboardSection";

export default function TopRated() {
  const { startPoint, endPoint, key, topRated } = api;
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTopRated();
  }, []);

  const getTopRated = async () => {
    const {
      data: { results },
    } = await axios.get(startPoint + topRated + key + endPoint);

    setMovies(results);
  };

  return <DashboardSection movies={movies} title="Top Rated Movies" />;
}
