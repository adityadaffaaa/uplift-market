import React from "react";

const StatusLabel = ({ step = 1 }) => {
  return (
    <div
      className={`px-6 py-1 text-paragraph7Res rounded-full ${
        step === 1
          ? "bg-[#FFF9E7] text-secondary"
          : "bg-[#E1E9FF] text-[#5378E2]"
      } `}
    >
      {step === 1 ? "Baru" : "Dikerjakan"}
    </div>
  );
};

export default StatusLabel;
