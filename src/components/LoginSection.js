import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginSection() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);

  return (
    <>
      <div className="container max-w-lg mx-auto">
        <p className="text-white text-4xl text-center mb-5">
          {isLogin ? "Login" : "Register"}
        </p>
        <div className="bg-[rgba(0,0,0,0.8)] w-full p-8 md:p-10 flex flex-col space-y-5 rounded-md items-center">
          <input
            className="px-5 py-[5px] border-none rounded-md w-full outline-none"
            type="text"
            placeholder="enter email"
          />
          <input
            className="px-5 py-[5px] border-none rounded-md w-full outline-none"
            type="password"
            placeholder="enter password"
          />
          <input
            className={`${
              isLogin ? "hidden" : ""
            } px-5 py-[5px] border-none rounded-md w-full outline-none`}
            type="password"
            placeholder="re-enter password"
          />
          <button
            onClick={() => navigate("/dashboard")}
            className="text-white w-full bg-myRed py-[5px] px-5 rounded-md"
          >
            {isLogin ? "Login" : "Register"}
          </button>
          <p className="underline underline-myRed text-white">
            {isLogin ? "New to Netflix?" : " Already a member?"} ||{" "}
            <span
              className="text-myRed cursor-pointer"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? "Register" : "Login"} instead
            </span>
          </p>
        </div>
      </div>
    </>
  );
}
