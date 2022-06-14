import React from "react";
import { AiOutlineDoubleRight } from "react-icons/ai";

export default function Search() {
  return (
    <div>
      <p className="text-white text-center">
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <div className="flex flex-col md:flex-row items-center justify-center mt-5 w-full">
        <input
          type="text"
          className="p-4 flex-1 w-full outline-none text-myGray"
          placeholder="Email address"
        />
        <button className="mt-3 py-3 px-6 md:py-4 md:mt-0 border-none text-white bg-myRed flex flex-row items-center">
          Get Started &nbsp;
          <AiOutlineDoubleRight />
        </button>
      </div>
    </div>
  );
}
