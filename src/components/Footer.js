import React from "react";

export default function Footer() {
  return (
    <div className="bg-black py-20 px-5 md:px-40 text-gray-500 text-[15px]">
      <div className="container max-w-3xl text-left mx-auto flex flex-wrap gap-4 space-y-10 justify-center md:flex-row md:justify-between md:items-center">
        <div className="flex flex-col space-y-5">
          <p className="cursor-pointer hover:">Questions? Contact us.</p>
          <div className="flex flex-col space-y-1">
            <p className="cursor-pointer hover:">FAQ</p>
            <p className="cursor-pointer hover:">Investor Relations</p>
            <p className="cursor-pointer hover:">Privacy</p>
            <p className="cursor-pointer hover:">Speed Test</p>
          </div>
          <p className="cursor-pointer hover:">Netflix Cameroon</p>
        </div>
        <div className="flex flex-col space-y-1">
          <p className="cursor-pointer hover:">Help Center</p>
          <p className="cursor-pointer hover:">Jobs</p>
          <p className="cursor-pointer hover:">Cookie Preferences</p>
          <p className="cursor-pointer hover:">Legal Notice</p>
        </div>
        <div className="flex flex-col space-y-1">
          <p className="cursor-pointer hover:">Account</p>
          <p className="cursor-pointer hover:">Ways to Watch</p>
          <p className="cursor-pointer hover:">Corporate Information</p>
          <p className="cursor-pointer hover:">Only on Netflix</p>
        </div>
        <div className="flex flex-col space-y-1 ">
          <p className="cursor-pointer hover:">Media Center</p>
          <p className="cursor-pointer hover:">Terms of use</p>
          <p className="cursor-pointer hover:">Contact us</p>
        </div>
      </div>
    </div>
  );
}
