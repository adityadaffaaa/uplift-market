import React from "react";

const StatusLabel = ({ status = "Pesanan baru" }) => {
  return (
    <div
      className={`px-6 py-1 text-paragraph7Res rounded-full ${
        status === "Pesanan baru"
          ? "bg-[#FFF9E7] text-secondary"
          : "bg-[#E1E9FF] text-[#5378E2]"
      } `}
    >
      {status}
    </div>
  );
};

export default StatusLabel;
