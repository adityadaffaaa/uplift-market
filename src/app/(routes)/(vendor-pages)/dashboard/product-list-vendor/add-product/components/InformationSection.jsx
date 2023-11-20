import React from "react";
import { Button } from "@nextui-org/react";
const InformationSection = () => {
  return (
    <section className="px-6 py-8 hidden bg-white rounded-lg lg:flex flex-col gap-1 flex-[1_1_30%]">
      <Button className="flex justify-start" radius="sm">
        Informasi Dasar
      </Button>
      <Button
        className="flex justify-start"
        variant="light"
        radius="sm"
      >
        Media
      </Button>
      <Button
        className="flex justify-start"
        variant="light"
        radius="sm"
      >
        Pengerjaan
      </Button>
    </section>
  );
};

export default InformationSection;
