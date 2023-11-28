"use client";

import React from "react";
import icons from "@/app/utils/icons";
import { useSession } from "next-auth/react";
const { AddCircleIcon, AutoRenewIcon, DoneIcon } =
  icons.vendorDashboard.homeVendor;

const HeadSection = () => {
  const { data: session, status } = useSession();

  return (
    <section className="flex flex-col gap-4">
      <WelcomeCard name={session?.user.vendor.name} />
      <div className="flex flex-col xl:flex-row gap-4">
        {headCardItem.map(
          ({ count, icon, title }, index) => (
            <HeadCard
              key={index}
              count={count}
              icon={icon}
              title={title}
              iconColor={
                index === 0
                  ? "bg-[#FFF9E7] text-secondary"
                  : index === 1
                  ? "bg-[#E1E9FF] text-[#5378E2]"
                  : "bg-[#D2E9E3] text-primary"
              }
            />
          )
        )}
      </div>
    </section>
  );
};

const WelcomeCard = ({ name = "" }) => {
  return (
    <div className="w-full flex flex-col justify-center lg:h-40 gap-4 bg-[#D2E9E3] overflow-hidden relative rounded-lg p-6">
      <img
        className="absolute -right-14 -top-14 h-32"
        src="/assets/images/welcome-circle.png"
        alt=""
      />
      <img
        className="absolute lg:right-6 xl:right-20 bottom-0 h-32 hidden lg:block"
        src="/assets/images/welcome-vector.png"
        alt=""
      />
      <h1 className="capitalize text-primary text-heading4">
        Welcome back, {name}
      </h1>
      <p className="text-paragraph9">
        Jangan lupa mandiin kholis
      </p>
    </div>
  );
};

const HeadCard = ({ icon, title, count, iconColor }) => {
  return (
    <div className="py-3 px-5 border-2 flex flex-row rounded-lg bg-white shadow-defaultShadow items-center gap-3 xl:flex-1">
      <div className={`p-2 rounded-full ${iconColor}`}>
        {icon}
      </div>
      <div className="flex flex-col">
        <h6 className="text-paragraph3Res">{title}</h6>
        <p className="text-paragraph1 font-bold">{count}</p>
      </div>
    </div>
  );
};

const headCardItem = [
  {
    icon: <AddCircleIcon />,
    title: "Pesanan Masuk",
    count: "1.291",
  },
  {
    icon: <AutoRenewIcon />,
    title: "Pesanan Dikerjakan",
    count: "1.291",
  },
  {
    icon: <DoneIcon />,
    title: "Pesanan Selesai",
    count: "1.291",
  },
];

export default HeadSection;
