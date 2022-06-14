import React, { useState } from "react";
import { HiOutlinePlus } from "react-icons/hi";

export default function FAQ({ title, body }) {
  const [visible, setVisible] = useState(false);

  return (
    <div className="flex flex-col justify-center items-center m-2">
      <div
        onClick={() => setVisible(!visible)}
        className="bg-myGray p-5 w-full cursor-pointer text-white flex flex-row justify-between items-center"
      >
        <p className="md:text-2xl">{title}</p>
        <HiOutlinePlus
          className={`text-2xl ${
            visible ? "rotate-45" : "rotate-0"
          } duration-150`}
        />
      </div>
      <div
        className={`bg-myGray p-5 m-[1px] w-full text-white ${
          visible ? "" : "hidden"
        } duration-1000`}
      >
        <p>{body}</p>
      </div>
    </div>
  );
}
