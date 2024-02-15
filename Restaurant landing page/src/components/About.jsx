import React from "react";
import img from "../assets/img/habeshaAbout1.jpg";
import Button from "../layouts/Button";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5">
      <img src={img} className='mr-5' alt="img" />

      <div className=" space-y-4 lg:pt-14">
        <h1 className=" font-semibold text-4xl text-center md:text-start">
          Why Choose Us?
        </h1>
        <p>
        Experience the flavors of traditional Ethiopian cuisine, celebrated for its aromatic spices, unique cooking techniques, and communal dining tradition. Discover iconic dishes such as injera (sourdough flatbread), doro wat (spicy chicken stew), and kitfo (minced raw meat). 
        Savor the rich flavors and textures that have made Ethiopian cuisine a favorite around the world.
        </p>
        <p>
        we invite you to embark on a gastronomic adventure and discover the diverse array of 
        dining options and libations that Addis Ababa has to offer.
        </p>
        <div className=" flex justify-center lg:justify-start">
          <Button title="Learn More" />
        </div>
      </div>
    </div>
  );
};

export default About;