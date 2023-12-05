"use client";
import React from "react";
import { Button } from "@nextui-org/react";
import {
  Link,
  animateScroll as scroll,
} from "react-scroll";

const InformationSection = () => {
  return (
    <section className="px-6 py-8 hidden bg-white rounded-lg lg:flex flex-col gap-1 flex-[1_1_30%]">
      {menus.map(({ id, name }) => (
        <Link
          to={id}
          spy={true}
          smooth={true}
          offset={-70}
          duration={100}
          className="w-full"
        >
          <Button
            className="flex justify-start"
            variant="light"
            radius="sm"
            fullWidth
          >
            {name}
          </Button>
        </Link>
      ))}
    </section>
  );
};

const menus = [
  { id: "informasiProduct", name: "Informasi Dasar" },
  { id: "media", name: "Media" },
  { id: "informasiPengerjaan", name: "Pengerjaan" },
];

export default InformationSection;
