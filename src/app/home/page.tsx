import React from "react";
import Navigation from "./components/navigation/navigation";
import Main from "../../components/main/main";
import Partition from "../../components/partition/partition";
import connectDB from "../../db/connectDB";

const Home = async () => {
  await connectDB();

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
