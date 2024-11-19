"use client";
import React, { useState, useEffect } from "react";
import { TailSpin } from "react-loader-spinner";
import axios from "axios";
import { getSession } from "@/server/serverActions";
import Script from "next/script";

const TickIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="22"
    viewBox="0 0 24 22"
    fill="none"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.0183 21.0833C17.7761 21.0833 22.4438 16.5688 22.4438 11C22.4438 5.43112 17.7761 0.916656 12.0183 0.916656C6.26044 0.916656 1.59277 5.43112 1.59277 11C1.59277 16.5688 6.26044 21.0833 12.0183 21.0833ZM11.7407 14.3982L17.4273 8.89817L16.087 7.60181L11.0705 12.4536L8.89738 10.3518L7.55702 11.6482L10.4004 14.3982L11.0705 15.0463L11.7407 14.3982Z"
      fill="#fff"
    />
  </svg>
);

const plans = [
  {
    id: "basic",
    name: "Basic",
    price: "₹99",
    resolution: "480p",
    quality: "Fair",
    devices: "TV, computer, mobile phone, tablet",
    watchDevices: 1,
    downloadDevices: 1,
    maximumGroupMembers: 2,
  },
  {
    id: "standard",
    name: "Standard",
    price: "₹199",
    resolution: "720p",
    quality: "Good",
    devices: "TV, computer, mobile phone, tablet",
    watchDevices: 1,
    downloadDevices: 1,
    maximumGroupMembers: 5,
  },
  {
    id: "premium",
    name: "Premium",
    price: "₹299",
    resolution: "1080p (Full HD)",
    quality: "Great",
    devices: "TV, computer, mobile phone, tablet",
    watchDevices: 2,
    downloadDevices: 2,
    maximumGroupMembers: 10,
  },
];

interface User {
  email: string;
  isSubscribed: boolean;
  isVerified: boolean;
  subscriptionType: string;
  username: string;
}

const PlanSelection = () => {
  const [user, setUser] = useState<User>({
    email: "",
    isSubscribed: false,
    isVerified: false,
    subscriptionType: "",
    username: "",
  });
  const [selectedPlan, setSelectedPlan] = useState("standard");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const session = await getSession();
        if (session && session.user) {
          setUser(session.user as User);
        }
      } catch (error) {
        console.error("Error fetching session:", error);
      }
    };
    fetchSession();
  }, []);

  const handleChange = (planId: string) => {
    setSelectedPlan(planId);
  };

  const handleSubmit = () => {
    const selectedPlanDetails = plans.find((plan) => plan.id === selectedPlan);
    if (selectedPlanDetails) {
      pay(parseInt(selectedPlanDetails.price.slice(1)));
    }
  };

  const pay = async (amount: number) => {
    const res = await axios.post("/api/users/initiatePayment", {
      email: user.email,
      amount: amount.toString(),
    });

    console.log(res.data);

    const orderId = res.data.order.id;

    const options = {
      key: process.env.RAZORPAY_KEY_ID || "",
      amount: amount * 100,
      currency: "INR",
      name: "StreamFlix",
      description: "Payment for StreamFlix subscription",
      order_id: orderId,
      callback_url: "/api/razorpay",
      prefill: {
        name: "Aarav Agarwal",
        email: "aarav.knp.08@gmail.com",
        contact: "9219001562",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };
    const rzp = new (window as any).Razorpay(options);
    rzp.open();
  };

  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>
      <div className="my-20 overflow-x-hidden mx-auto w-2/3 flex-[1] flex flex-col justify-center items-center font-streamflixRegular gap-4">
        <div className="self-start">
          STEP&nbsp;
          <span className="font-streamflixBold">4</span>&nbsp;OF&nbsp;
          <span className="font-streamflixBold">4</span>
        </div>
        <div className="font-streamflixMedium text-4xl self-start">
          Choose the plan that’s right for you
        </div>
        <div className="flex gap-6 w-full mt-6">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`border text-foreground mx-auto text-lg font-streamflixMedium rounded-xl p-2 cursor-pointer shadow-sm ${
                selectedPlan === plan.id
                  ? "border-customRed"
                  : "border-customGray"
              }`}
              onClick={() => handleChange(plan.id)}
            >
              <div className="bg-gradient-to-l from-red-600 via-purple-500 to-blue-600 rounded-xl p-4 flex flex-col">
                <div className="text-lg font-bold font-StreamflixBold">
                  {plan.name}
                </div>
                <div className="text-sm font-bold font-StreamflixBold">
                  {plan.resolution}
                </div>
                <div
                  key={plan.id}
                  className={`self-end ${
                    selectedPlan === plan.id ? "block" : "hidden"
                  }`}
                >
                  <TickIcon />
                </div>
              </div>
              <ul className="mt-4 text-sm p-4 flex flex-col gap-5">
                <li>
                  <div className="text-customGray">Monthly price:</div>{" "}
                  {plan.price}
                </li>
                <div className="bg-[#1e1e1e] w-full h-0.5"></div>
                <li>
                  <div className="text-customGray">
                    Video and sound quality:
                  </div>{" "}
                  {plan.quality}
                </li>
                <div className="bg-[#1e1e1e] w-full h-0.5"></div>
                <li>
                  <div className="text-customGray">Resolution:</div>{" "}
                  {plan.resolution}
                </li>
                <div className="bg-[#1e1e1e] w-full h-0.5"></div>
                <li>
                  <div className="text-customGray">Supported devices:</div>{" "}
                  {plan.devices}
                </li>
                <div className="bg-[#1e1e1e] w-full h-0.5"></div>
                <li>
                  <div className="text-customGray">
                    Devices your household can watch at the same time:
                  </div>{" "}
                  {plan.watchDevices}
                </li>
                <div className="bg-[#1e1e1e] w-full h-0.5"></div>
                <li>
                  <div className="text-customGray">Download devices:</div>{" "}
                  {plan.downloadDevices}
                </li>
                <div className="bg-[#1e1e1e] w-full h-0.5"></div>
                <li>
                  <div className="text-customGray">
                    Maximum number of group members:
                  </div>{" "}
                  {plan.maximumGroupMembers}
                </li>
              </ul>
            </div>
          ))}
        </div>

        <button
          className="mt-4 flex items-center justify-center w-1/3 px-6 py-4 text-2xl bg-customRed rounded font-streamflixMedium"
          type="submit"
          onClick={() => {
            handleSubmit();
            setIsLoading(true);
          }}
        >
          {isLoading ? (
            <TailSpin
              visible={true}
              height="30"
              width="30"
              color="var(--foreground)"
              ariaLabel="tail-spin-loading"
              radius="1"
              wrapperStyle={{}}
              wrapperClass=""
            />
          ) : (
            "Pay"
          )}
        </button>
      </div>
    </>
  );
};

export default PlanSelection;
