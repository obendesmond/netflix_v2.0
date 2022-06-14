import axios from "axios";
import React, { useEffect } from "react";
import Header from "../components/Header";
import api from "../config/api_config";

export default function Dashboard() {
  const { startPoint, endPoint, key, popularMovies, topRated, upComing } = api;

  useEffect(() => {
    getPopularMovies();
  }, []);

  const getPopularMovies = async () => {
    const {
      data: { results },
    } = await axios.get(startPoint + popularMovies + key + endPoint);
    console.log(results);
  };

  return (
    <div>
      <Header isDashboard />
    </div>
  );
}
