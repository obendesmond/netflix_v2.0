import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import api from "../config/api_config";
import DashboardSection from "./DashboardSection";

export default function UpComing() {
  const { startPoint, endPoint, key, upComing } = api;
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getUpComing();
  }, []);

  const getUpComing = async () => {
    const {
      data: { results },
    } = await axios.get(startPoint + upComing + key + endPoint);

    setMovies(results);
  };

  return <DashboardSection movies={movies} title="Up Coming Movies" />;
}
