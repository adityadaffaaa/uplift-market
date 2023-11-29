import React from "react";
import { Skeleton } from "@nextui-org/react";

export const GoogleMapsSkeleton = () => {
  return (
    <>
      <Skeleton className="w-[20%] h-10 rounded-lg">
        <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
      </Skeleton>
      <Skeleton className="rounded-lg">
        <div className="h-[300px] rounded-lg bg-default-300"></div>
      </Skeleton>
      <div className="space-y-3 flex flex-col items-end">
        <Skeleton className="w-[10%] rounded-lg">
          <div className="h-10 w-4/5 rounded-lg bg-default-200"></div>
        </Skeleton>
        <div className="flex justify-between items-end w-full">
          <Skeleton className="w-[10%] rounded-lg">
            <div className="h-5 w-2/5 rounded-lg bg-default-300"></div>
          </Skeleton>
          <Skeleton className="w-[10%] rounded-lg">
            <div className="h-10 w-2/5 rounded-lg bg-default-300"></div>
          </Skeleton>
        </div>
      </div>
    </>
  );
};

export const NavbarUserSkeleton = () => {
  return (
    <>
      <div className="flex items-center gap-3">
        <Skeleton className="rounded-full w-10 h-10 p-6 ">
          <div className="rounded-full w-10 h-10 p-6 bg-default-200"></div>
        </Skeleton>
        <Skeleton className="w-full rounded-full">
          <div className="w-[100px] h-6 rounded-full bg-default-300"></div>
        </Skeleton>
      </div>
    </>
  );
};

export const ProductListSkeleton = () => {
  return (
    <>
      <div className="grid grid-cols-2 w-full lg:grid-cols-4 gap-4">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((value) => (
          <Skeleton
            key={value}
            className="w-full h-64 lg:h-80 rounded-xl"
          >
            <div className="w-full h-64 lg:h-80 rounded-xl bg-default-300"></div>
          </Skeleton>
        ))}
      </div>
    </>
  );
};

export const OrderSummarySkeleton = () => {
  return (
    <Skeleton className="h-80 flex-[1_1_40%] rounded-lg">
      <aside className="flex flex-col gap-10 bg-default-300 rounded-lg md:p-6 flex-[1_1_40%]"></aside>
    </Skeleton>
  );
};

export const PengaturanUserSkeleton = () => {
  return (
    <Skeleton className="h-96 w-full rounded-xl">
      <section className=" bg-default-300 rounded-xl"></section>
    </Skeleton>
  );
};
