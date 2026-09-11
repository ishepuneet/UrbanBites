import React from "react";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Fries from "./components/Fries";
import Toplist from "./components/Toplist";
import Reviews from "./components/Review";

export default function App() {
  return (
    <div className=" bg-[#01544A] ">
      <div className="max-w-screen-2xl pt-30 mx-auto">
        <Hero />
        <Fries/>
        <Toplist/>
        <Reviews/>
      </div>
    </div>
  );
}
