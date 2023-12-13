import React from "react";
import TabSection from "../components/TabSection";
import MainSection from "../components/MainSection";

const TransactionProcess = ({ params }) => {
  return (
    <div className="flex flex-col gap-8">
      <TabSection />
      <MainSection id={params.id} />
    </div>
  );
};

export default TransactionProcess;
