"use client";

import React from "react";
import { Avatar, Button } from "@nextui-org/react";
import StatusLabel from "../../../../../components/StatusLabel";
import icons from "@/app/utils/icons";

const { ArrowRightIcon } = icons.vendorDashboard.homeVendor;

const RecentActivityCard = () => {
  return (
    <div className="flex flex-col p-5 shadow-defaultShadow bg-white rounded-lg border-2 gap-4">
      <h6 className="text-paragraph1Res lg:text-heading4">
        Recent Activity
      </h6>
      <div className="gap-6 flex flex-col xl:hidden">
        <ActivityItem step={1} />
        <ActivityItem step={2} />
        <ActivityItem step={2} />
      </div>
      <ActivityTableWeb />
    </div>
  );
};

const ActivityItem = ({ step }) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-between items-center xl:hidden">
        <div className="flex items-center gap-2">
          <Avatar
            src="/assets/images/img-profile-picture.png"
            size="sm"
          />
          <p className="text-paragraph8Res">
            Rahmat Kholis
          </p>
        </div>
        <StatusLabel step={step} />
      </div>
      <div className="flex gap-2">
        <Avatar
          radius="sm"
          src="/assets/images/img-activity.png"
        />
        <div className="flex flex-col">
          <h6 className="text-paragraph4Res">
            Photo Product Kosmetik Savana
          </h6>
          <p className="text-paragraph9Res text-neutral-400">
            Jasa Foto Produk Berkualitas, da...
          </p>
        </div>
      </div>
    </div>
  );
};

const ActivityTableWeb = () => {
  return (
    <table className="hidden xl:block w-full">
      <thead>
        <tr>
          <th style={{ width: "75%" }}></th>
          <th style={{ width: "15%" }}></th>
          <th style={{ width: "15%" }}></th>
          <th style={{ width: "10%" }}></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <ActivityTableItemWeb />
        </tr>
        <tr>
          <ActivityTableItemWeb />
        </tr>
        <tr>
          <ActivityTableItemWeb />
        </tr>
      </tbody>
    </table>
  );
};

const ActivityTableItemWeb = () => {
  return (
    <>
      <td className="py-2">
        <div className="flex gap-2">
          <Avatar
            radius="sm"
            src="/assets/images/img-activity.png"
          />
          <div className="flex flex-col">
            <h6 className="text-paragraph4Res">
              Photo Product Kosmetik Savana
            </h6>
            <p className="text-paragraph9Res text-neutral-400">
              Jasa Foto Produk Berkualitas, da...
            </p>
          </div>
        </div>
      </td>
      <td>
        <h6 className="text-paragraph4Res">
          Rahmat Kholis
        </h6>
      </td>
      <td align="center">
        <StatusLabel step={2} />
      </td>
      <td className="px-2">
        <Button isIconOnly variant="bordered" radius="sm">
          <ArrowRightIcon />
        </Button>
      </td>
    </>
  );
};

export default RecentActivityCard;
