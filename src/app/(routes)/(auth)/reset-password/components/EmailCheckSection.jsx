import React from "react";

export const EmailCheckSection = () => {
  return (
    <div className="w-full flex flex-col gap-4 mx-0">
      <div className="flex flex-col mt-4 w-full gap-8">
        <img
          src={"/assets/images/resetPassword.png"}
          alt="img"
          className="w-full p-6"
        />
      </div>
    </div>
  );
};

export default EmailCheckSection;
