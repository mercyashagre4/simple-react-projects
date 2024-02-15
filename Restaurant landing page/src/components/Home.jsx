import React from "react";
import Button from "../layouts/Button";


const Home = () => {
  return (
    <div className=" min-h-screen flex flex-row justify-between items-center lg:px-32 px-5 bg-[url('./assets/img/backgroundPic.png')] bg-cover bg-no-repeat ">
      <div className=" w-full lg:w-2/3 space-y-5">
        <h1 className=" text-backgroundColor font-semibold text-6xl">
          Elevate Your Inner Foodie with Every Bite.
        </h1>
        <p className=" text-backgroundColor">
        Our dishes are prepared with a distinctive variety of unique spices and clarified butter.
        </p>
        <div className=" lg:pl-44">
          <Button title="Order Now" />
        </div>
      </div>
    </div>
  );
};

export default Home;
