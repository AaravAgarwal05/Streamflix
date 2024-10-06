import React from "react";
import Login from "./login";
import Quarter from "./quarter";

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
