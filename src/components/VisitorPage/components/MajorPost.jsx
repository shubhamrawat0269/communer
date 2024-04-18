import React from "react";

const MajorPost = () => {
  return (
    <div>
      <figure className="relative h-full">
        <img
          src="images/hero-img-1.jpg"
          className="w-full h-full"
          alt="hero-img-1"
        />
        <figcaption className="absolute bottom-5 left-10">
          <h2 className="text-white font-semibold text-5xl">Title</h2>
          <p className="text-white flex gap-3 font-thin text-2xl">
            <span>By Shubham</span>
            <span>date</span>
          </p>
        </figcaption>
      </figure>
    </div>
  );
};

export default MajorPost;
