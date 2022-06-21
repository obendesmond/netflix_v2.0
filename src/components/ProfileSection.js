import React from "react";
import { useNavigate } from "react-router-dom";

export default function ProfileSection() {
  const goTo = useNavigate();

  return (
    <div className="container max-w-xl mx-auto p-5 ">
      <div className="flex flex-row justify-between items-center">
        <p className="text-white text-4xl font-bold">Netflix: Edit Profile</p>
        <button
          onClick={() => goTo("/dashboard")}
          className="text-white bg-myRed py-[5px] px-5 rounded-md"
        >
          Dashboard
        </button>
      </div>
      <hr className="bg-white w-full mb-5" />
      <input
        className="mb-5 px-5 py-[5px] border-none rounded-md w-full outline-none"
        type="text"
        value="obendesmond2@gmail.com"
        placeholder="obendesmond2@gmail.com"
      />
      <p className="text-white text-3xl">Plans (Current Plan: Platinum)</p>
      <hr className="bg-white w-full" />
      <div className="bg-[rgba(0,0,0,0.8)] w-full text-white p-8 flex flex-col space-y-5 rounded-md items-center">
        <div className="flex flex-row justify-between items-center w-full">
          <div>
            <p className="font-bold -mt-6">Renewal Date 09/04/2030</p>
          </div>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <div>
            <p className="font-bold text-xl">Netflix Standard</p>
            <p className="text-[10px]">1080p</p>
          </div>
          <button className="text-white bg-myRed py-[5px] px-5 rounded-md">
            Subscribe
          </button>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <div>
            <p className="font-bold text-xl">Netflix Basic</p>
            <p className="text-[10px]">480p</p>
          </div>
          <button className="text-white bg-myRed py-[5px] px-5 rounded-md">
            Subscribe
          </button>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <div>
            <p className="font-bold text-xl">Netflix Premium</p>
            <p className="text-[10px]">4k+HDR</p>
          </div>
          <button className="text-white bg-myRed py-[5px] px-5 rounded-md">
            Subscribe
          </button>
        </div>

        <button
          onClick={() => goTo("/")}
          className="text-white w-full bg-myRed py-[5px] px-5 rounded-md"
        >
          SIGN OUT
        </button>
      </div>
    </div>
  );
}
