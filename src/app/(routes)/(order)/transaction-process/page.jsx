import React from "react";
import TabSection from "./components/TabSection";
import MainSection from "./components/MainSection";
const TransactionProcess = () => {
  return (
    <div className="flex flex-col gap-8">
      <TabSection />
      <MainSection />
    </div>
  );
};

export default TransactionProcess;
