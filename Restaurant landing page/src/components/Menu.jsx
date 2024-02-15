import React from "react";
import DishesCard from "../layouts/DishesCard";
import doro from "../assets/img/doro.jpg";
import kitfo from "../assets/img/kitfo.jpg";
import meat from "../assets/img/meat.jpg";

const Menu = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
      <h1 className=" text-4xl font-semibold text-center lg:pt-8 pt-24 pb-10">
        Premium Menu
      </h1>

      <div className=" flex flex-wrap gap-8 justify-center">
        <DishesCard img={doro} title="Delicious Dish" price="400.99 Birr" />
        <DishesCard img={kitfo} title="Delicious Dish" price="450.99 Birr" />
        <DishesCard img={meat} title="Delicious Dish" price="500.99 Birr" />
      </div>
    </div>
  );
};

export default Menu;