import React from "react";
import { Skeleton } from "@nextui-org/react";

const SearchFilterProductLoading = () => {
  return (
    <>
      <Skeleton className="w-80 rounded-lg m-3">
        <div className="h-screen "></div>
      </Skeleton>
      <div className="w-[calc(100%-320px)] screen flex justify-center  m-3">
        <Skeleton className="container w-full rounded-lg  mr-28">
          <div className="h-screen "></div>
        </Skeleton>
      </div>
    </>
  );
};

export default SearchFilterProductLoading;
