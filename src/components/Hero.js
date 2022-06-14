import React from "react";
import Search from "./Search";

export default function Hero() {
  return (
    <div
      style={{
        height: "93vh",
        width: "100vw",
        background: `linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0.8) 100% ), url('https://assets.nflxext.com/ffe/siteui/vlv3/25badb14-858b-4b1c-8b7d-2244098454d9/5657bf35-6c18-4918-ad47-dab5ebea3063/CM-en-20220606-popsignuptwoweeks-perspective_alpha_website_medium.jpg')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        padding: "200px 0 0 0",
      }}
    >
      <div className="text-white space-y-2 px-5 flex flex-col justify-center items-center md:space-y-6 text-center">
        <h1 className="text-2xl md:text-5xl font-bold">
          Unlimited movies, TV
          <br /> shows, and more.
        </h1>
        <p className="md:text-2xl">Watch anywhere. Cancel anytime.</p>
        <Search />
      </div>
    </div>
  );
}
