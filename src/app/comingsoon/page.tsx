import React from "react";
import Navigation from "./components/navigation/navigation";
import Main from "../../components/main/main";
import Partition from "../../components/partition/partition";
import { redirect } from "next/navigation";
import { getSession } from "@/actions/serverActions";

const ComingSoon = async () => {
  const session = await getSession();
  if (!session || !session.isLoggedIn) {
    redirect("/");
  } else {
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
};

export default ComingSoon;
