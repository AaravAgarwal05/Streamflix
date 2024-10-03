import React from "react";
import Browse from "./components/browse/browse";
import Followers from "./components/followers/followers";
import Logout from "./components/logout/logout";
import SemiPartition from "./components/semipartiotion/semipartition";

const Main = () => {
  return (
    <>
      <div className="flex-[1] w-full h-full flex flex-col">
        <Browse />
        <SemiPartition />
        <Followers />
        <SemiPartition />
        <Logout />
      </div>
    </>
  );
};

export default Main;
