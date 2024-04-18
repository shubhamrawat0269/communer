import React from "react";

const PostCard = () => {
  return (
    <div>
      <figure className="p-5 pt-0">
        <img src="images/hero-img-3.jpg" alt="heroImg2" />
        <figcaption>
          <p className="text-slate-500 flex gap-3 items-center">
            <span>Forms</span> <span>Artist</span>
          </p>
          <h2 className="text-3xl font-semibold">
            Renaissance Classics: the Greatest Collection in Europe
          </h2>
          <div className="flex gap-3 items-center text-orange-600">
            <span>Date</span>
            <span>Comments</span>
          </div>
        </figcaption>
      </figure>
    </div>
  );
};

export default PostCard;
