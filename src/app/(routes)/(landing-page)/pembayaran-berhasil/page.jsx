"use client";
import React from "react";
import { Button } from "@nextui-org/react";
import Link from "next/link";
const PembayaranBerhasil = () => {
  return (
    <section className="h-screen grid place-items-center">
      <div className="container flex flex-col gap-8 items-center px-5">
        <img
          className="max-h-52"
          src="/assets/icons/payment-success.png"
          alt=""
        />
        <div className="flex flex-col items-center gap-1 ">
          <h2 className="text-heading2 text-center">
            Pembayaran Berhasil
          </h2>
          <p className="text-paragraph8 text-neutral-400 text-center">
            Pembayaran dengan No. Transaksi 19273728 telah
            berhasil
          </p>
        </div>
        <Link href={"/"} className="max-w-xs w-full">
          <Button color="primary" radius="sm" fullWidth>
            Kembali
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default PembayaranBerhasil;
