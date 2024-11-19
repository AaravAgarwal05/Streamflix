"use client";
import React, { useEffect } from "react";
import Navigation from "./components/navigation/navigation";
import Main from "../../components/main/main";
import Partition from "../../components/partition/partition";
import showToast from "@/components/showToast/showToast";
import { useRouter } from "next/navigation";

const Home = async () => {
  const router = useRouter();
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const response = urlParams.get("paymentStatus");
    if (response === "success") {
      showToast(
        "Payment successful! You can now enjoy StreamFlix 🥳",
        "success"
      );
      setTimeout(() => {
        router.push("/home");
      }, 5000);
    }
  }, []);
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
