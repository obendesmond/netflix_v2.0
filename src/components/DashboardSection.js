import React from "react";
import Card from "./Card";

export default function DashboardSection({ title, movies }) {
  return (
    <div className="bg-black">
      <div className="container max-w-full mx-auto">
        <p className="text-white text-4xl p-10">{title}</p>
        <div className="flex flex-wrap items-end justify-center space-x-2 space-y-2">
          {movies.map(movie => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
}
