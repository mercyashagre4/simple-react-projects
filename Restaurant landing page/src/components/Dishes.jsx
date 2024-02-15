import React from "react";
import habesha1 from "../assets/img/habesha1.jpg";
import habesha2 from "../assets/img/habesha2.jpg";
import habesha3 from "../assets/img/habesha3.jpg";
import habesha4 from "../assets/img/habesha4.jpg";
import habesha5 from "../assets/img/habesha5.jpg";
import habesha6 from "../assets/img/habesha6.jpg";
import DishesCard from "../layouts/DishesCard";

const Dishes = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
      <h1 className=" text-4xl font-semibold text-center pt-24 pb-10">
        Our Dishes
      </h1>

      <div className=" flex flex-wrap gap-8 justify-center">
        <DishesCard img={habesha1} title="Tasty Dish" price="453.99 Birr" />
        <DishesCard img={habesha2} title="Tasty Dish" price="390.99 Birr" />
        <DishesCard img={habesha3} title="Tasty Dish" price="350.99 Birr" />
        <DishesCard img={habesha4} title="Tasty Dish" price="380.99 Birr" />
        <DishesCard img={habesha5} title="Tasty Dish" price="456.99 Birr" />
        <DishesCard img={habesha6} title="Tasty Dish" price="342.99 Birr" />
      </div>
    </div>
  );
};

export default Dishes;