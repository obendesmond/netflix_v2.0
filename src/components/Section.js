import React from "react";

export default function Section({ title, body, img, reverse }) {
  return (
    <div className="bg-black py-10 px-5 md:px-40 grid grid-cols-1 md:grid-cols-2 items-center gap-4 md:gap-14">
      {!reverse ? (
        <>
          <div className=" text-center md:text-left text-white">
            <p className="font-bold text-2xl mb-5 md:text-5xl">{title}</p>
            <p className="md:text-3xl">{body}</p>
          </div>
          <div>
            <img className="" src={img} />
          </div>
        </>
      ) : (
        <>
          <div>
            <img className="" src={img} />
          </div>
          <div className=" text-center md:text-left text-white">
            <p className="font-bold text-2xl mb-5 md:text-5xl">{title}</p>
            <p className="md:text-3xl">{body}</p>
          </div>
        </>
      )}
    </div>
  );
}
