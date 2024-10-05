import React from "react";
import Login from "../components/login";
import Quarter from "../components/quarter";

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
