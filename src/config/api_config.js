const api = {
  key: "8525e97cec11bc754c4463ebe1e94d35",
  startPoint: "https://api.themoviedb.org/3/movie",
  endPoint: "&language=en-US&page=1",
  popularMovies: "/popular?api_key=",
  topRated: "/top_rated?api_key=",
  upComing: "/upcoming?api_key=",
  baseImgUrl: "https://image.tmdb.org/t/p/w500",
};

export default api;

// sample: `startPoint + popularMovies + key + endPoint`
