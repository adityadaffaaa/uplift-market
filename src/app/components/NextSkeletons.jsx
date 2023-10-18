import React from "react";
import { Skeleton } from "@nextui-org/react";

export const useSkeletons = () => {
  const GoogleMapsSkeleton = () => {
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

  const NavbarUserSkeleton = () => {
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

  return {
    GoogleMapsSkeleton,
    NavbarUserSkeleton,
  };
};

export default useSkeletons;
