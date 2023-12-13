"use client";

import React from "react";
import { Button } from "@nextui-org/react";
const DialogBox = ({
  denyBtn,
  confirmBtnText = "",
  title = "",
  confirm = () => {},
  deny = () => {},
}) => {
  return (
    <div className="flex rounded-lg flex-col lg:flex-row lg:justify-between gap-4 bg-[#E8F4F1] w-full items-center p-4">
      <p className="text-paragraph4Res lg:text-paragraph4 text-center">
        {title}
      </p>
      <div className="flex gap-2">
        <Button
          onClick={confirm}
          className={"px-6"}
          color={"primary"}
        >
          {confirmBtnText}
        </Button>
        {denyBtn && (
          <Button
            onClick={deny}
            className={"px-6"}
            variant={"bordered"}
            color={"primary"}
          >
            Tidak
          </Button>
        )}
      </div>
    </div>
  );
};

export default DialogBox;
