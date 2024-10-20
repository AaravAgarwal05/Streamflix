import React from "react";
import Navigation from "./components/navigation/navigation";
import Main from "../../components/main/main";
import Partition from "../../components/partition/partition";

const ComingSoon = async () => {
    return (
      <>
        <div className="flex w-full h-full">
          <Main />
          <Partition />
          <Navigation />
        </div>
      </>
    );
  };

export default ComingSoon;
