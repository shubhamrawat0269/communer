import React from "react";
import MajorPost from "./MajorPost";
import MinorPost from "./MinorPost";

const HeroSection = () => {
  return (
    <div className="">
      <div className="p-5 h-screen gap-4 md:grid md:grid-cols-2 md:gap-5">
        <MajorPost />
        <MinorPost />
      </div>
    </div>
  );
};

export default HeroSection;
