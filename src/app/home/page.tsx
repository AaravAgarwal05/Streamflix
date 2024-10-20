import React from "react";
import Navigation from "./components/navigation/navigation";
import Main from "../../components/main/main";
import Partition from "../../components/partition/partition";

const Home = async () => {
  return (
    <>
      <div className="flex h-full w-full">
        <Main />
        <Partition />
        <Navigation />
      </div>
    </>
  );
};

export default Home;
