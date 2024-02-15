import React from "react";
import ReviewCard from "../layouts/ReviewCard";
import img1 from "../assets/img/profile1.jpg";
import img2 from "../assets/img/profile3.jpg";
import img3 from "../assets/img/profile2.jpg";

const Review = () => {
  return (
    <div className=" min-h-screen flex flex-col items-center justify-center md:px-32 px-5">
      <h1 className=" text-4xl font-semibold text-center lg:pt-16 pt-24 pb-10">
        Customer's Review
      </h1>
      <div className=" flex flex-col md:flex-row gap-5 mt-5">
        <ReviewCard img={img1} name="Selam Abera" />
        <ReviewCard img={img2} name="Getachew Werku"  />
        <ReviewCard img={img3} name="Meron Belachew" />
      </div>
    </div>
  );
};

export default Review;