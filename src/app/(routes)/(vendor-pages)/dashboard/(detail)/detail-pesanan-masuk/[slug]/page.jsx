import React from "react";
import InformationSection from "../components/InformationSection";
import MainContentSection from "../components/MainContentSection";

const DashboardDetailPesananMasukVendor = () => {
  return (
    <div className="flex gap-8 flex-col lg:flex-row lg:items-start ">
      <MainContentSection />
      <InformationSection />
    </div>
  );
};

{
  /* <div className="w-full flex flex-col max-w-md lg:max-w-full mx-auto md:max-w-2x">
  <div className="m-5 lg:m-16 lg:mt-0">
    <div className="lg:flex lg:flex-row gap-x-6">
      <div className="lg:w-[680px]"> 
       
        <div className="flex flex-col lg:hidden">
          <Button
            color="primary"
            className="w-full mt-8"
            startContent={<CheckIcon />}
          >
            Terima Project
          </Button>
          <Button
            color="danger"
            className="w-full mt-3"
            startContent={<CloseIcon />}
          >
            Tolak Project
          </Button>
        </div>
      </div>
      
    </div>
  </div>
</div>; */
}

export default DashboardDetailPesananMasukVendor;
