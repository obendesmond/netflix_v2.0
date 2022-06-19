import React from "react";
import { useNavigate } from "react-router-dom";

export default function Header({ isDashboard }) {
  const navigateTo = useNavigate();

  return (
    <div
      className={`${
        isDashboard ? "bg-black" : "bg-transparent"
      } absolute w-full`}
    >
      <div className="flex flex-row px-4 items-center bg-transparent justify-between md:px-[52px]">
        <img
          onClick={() => navigateTo("/")}
          className="w-40 h-auto cursor-pointer"
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
        />
        <button
          onClick={() => navigateTo(`${isDashboard ? "/" : "/login"}`)}
          className="text-white bg-myRed py-[5px] px-5 rounded-md"
        >
          {isDashboard ? "Profile" : "Sign in"}
        </button>
      </div>
    </div>
  );
}
