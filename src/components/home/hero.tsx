import React from "react";
import Login from "./login";
import Quarter from "./top10Preview";

const Hero = () => {
  return (
    <>
      <section className="w-full h-full flex ">
        <Quarter />
        <Login />
      </section>
    </>
  );
};

export default Hero;
