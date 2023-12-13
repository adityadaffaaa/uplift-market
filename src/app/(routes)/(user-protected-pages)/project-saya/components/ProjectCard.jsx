"use client";

import React from "react";
import { Avatar, Button } from "@nextui-org/react";
import StatusLabel from "@/app/components/StatusLabel";
import icons from "@/app/utils/icons";
import Link from "next/link";
import {
  formatRupiah,
  dateConverterWithFormat,
} from "@/app/utils/extensions";
const { ArrowRightIcon, ShoppingBagIcon } =
  icons.myProjectIcon;

const ProjectCard = ({
  id,
  image,
  title = "",
  brief = "",
  vendor = "",
  price = 0,
  date = "",
  status = "",
}) => {
  return (
    <>
      <ProjectCardWeb
        image={image}
        id={id}
        brief={brief}
        title={title}
        price={price}
        status={status}
        vendor={vendor}
        date={date}
      />
      <ProjectCardMobile
        image={image}
        id={id}
        brief={brief}
        title={title}
        price={price}
        status={status}
        vendor={vendor}
        date={date}
      />
    </>
  );
};

const ProjectCardMobile = ({
  id,
  image,
  brief,
  title,
  vendor,
  price,
  status,
  date,
}) => {
  return (
    <Link href={`/transaction-process/${id}`}>
      <div className="p-3 rounded-xl shadow-defaultShadow flex flex-col lg:hidden gap-3 bg-white">
        <article className="flex justify-between">
          <p className="text-paragraph8">{vendor}</p>
          <div className="flex items-center text-neutral-400">
            <ShoppingBagIcon />
            Rp {formatRupiah(price)}
          </div>
          <StatusLabel status={status} />
        </article>
        <div className="flex gap-3 flex-[2_1_0%]">
          <Avatar src={image} radius="sm" />
          <div className="flex flex-col">
            <p className="text-paragraph4Res">{brief}</p>
            <p className="text-paragraph10 text-neutral-400">
              {title}
            </p>
          </div>
        </div>
        <p className="text-paragraph8Res text-neutral-600">
          {dateConverterWithFormat(date)}
        </p>
      </div>
    </Link>
  );
};
const ProjectCardWeb = ({
  id,
  image,
  brief,
  title,
  vendor,
  price,
  status,
  date,
}) => {
  return (
    <div className="p-6 bg-white shadow-defaultShadow items-center rounded-lg hidden lg:flex">
      <div className="flex gap-3 flex-[2_1_0%]">
        <Avatar src={image} radius="sm" />
        <div className="flex flex-col">
          <p className="text-paragraph4Res">{brief}</p>
          <p className="text-paragraph10 text-neutral-400">
            {title}
          </p>
        </div>
      </div>
      <div className="flex flex-col flex-1 gap-1">
        <p className="text-paragraph10 text-neutral-400">
          Vendor
        </p>
        <p className="text-paragraph9 text-neutral-600">
          {vendor}
        </p>
      </div>
      <div className="flex flex-col flex-1 gap-1">
        <p className="text-paragraph10 text-neutral-400">
          Harga
        </p>
        <p className="text-paragraph9 text-neutral-600">
          Rp {formatRupiah(price)}
        </p>
      </div>
      <div className="flex flex-col flex-1 gap-1">
        <p className="text-paragraph10 text-neutral-400">
          Tanggal
        </p>
        <p className="text-paragraph9 text-neutral-600">
          {dateConverterWithFormat(date)}
        </p>
      </div>
      <div className="flex flex-col items-start flex-1 gap-1">
        <p className="text-paragraph10 text-neutral-400">
          Status
        </p>
        <StatusLabel status={status} />
      </div>
      <div className="flex flex-col items-start gap-1">
        <Link href={`/transaction-process/${id}`}>
          <Button isIconOnly radius="sm" variant="bordered">
            <ArrowRightIcon />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
