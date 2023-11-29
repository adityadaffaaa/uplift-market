"use client";

import React from "react";
import { Avatar, Button } from "@nextui-org/react";
import StatusLabel from "@/app/components/StatusLabel";
import icons from "@/app/utils/icons";
import Link from "next/link";

const { ArrowRightIcon } = icons.myProjectIcon;

const ProjectCard = () => {
  return (
    <div className="p-6 bg-white shadow-defaultShadow flex items-center rounded-lg">
      <div className="flex gap-3 flex-[2_1_0%]">
        <Avatar
          src="/assets/images/img-activity.png"
          radius="sm"
        />
        <div className="flex flex-col">
          <p className="text-paragraph4Res">
            Lays’co Ads Video
          </p>
          <p className="text-paragraph10 text-neutral-400">
            Edit Video Professional 5 Menit
          </p>
        </div>
      </div>
      <div className="flex flex-col flex-1 gap-1">
        <p className="text-paragraph10 text-neutral-400">
          Vendor
        </p>
        <p className="text-paragraph9 text-neutral-600">
          Rahmat Kholis
        </p>
      </div>
      <div className="flex flex-col flex-1 gap-1">
        <p className="text-paragraph10 text-neutral-400">
          Harga
        </p>
        <p className="text-paragraph9 text-neutral-600">
          Rp500.000
        </p>
      </div>
      <div className="flex flex-col flex-1 gap-1">
        <p className="text-paragraph10 text-neutral-400">
          Tanggal
        </p>
        <p className="text-paragraph9 text-neutral-600">
          17 Sep 2023
        </p>
      </div>
      <div className="flex flex-col items-start flex-1 gap-1">
        <p className="text-paragraph10 text-neutral-400">
          Status
        </p>
        <StatusLabel />
      </div>
      <div className="flex flex-col items-start gap-1">
        <Link href={"/transaction-process"}>
          <Button isIconOnly radius="sm" variant="bordered">
            <ArrowRightIcon />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
