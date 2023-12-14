"use client";

import React from "react";
import { Button, Input } from "@nextui-org/react";
import DataTable from "react-data-table-component";
import icons from "@/app/utils/icons";

const { SearchIcon, InfoOutlineIcon } =
  icons.tarikSaldoIcon;

const SaldoScreen = () => {
  const customStyles = {
    table: {
      style: {
        borderRadius: "0px 0px 12px 12px",
        overflow: "hidden",
        padding: "12px",
      },
    },
    subHeader: {
      style: {
        borderRadius: "12px 12px 0px 0px",
        overflow: "hidden",
        padding: "0px",
        margin: "0px",
      },
    },
    headCells: {
      style: {
        fontWeight: "bold",
        fontSize: "14px",
      },
    },
    cells: {
      style: {
        fontSize: "14px",
        padding: "16px",
      },
    },
    rows: {
      style: {
        Button,
      },
    },
  };

  const columns = [
    {
      name: "Tanggal",
      selector: (row) => row.date,
      width: "20%",
    },
    {
      name: "Deskripsi",
      selector: (row) => row.desc,
      width: "70%",
    },
    {
      name: "Jumlah",
      selector: (row) => row.amount,
      width: "10%",
    },
  ];

  const data = [
    {
      id: 1,
      date: "7 Okt 2023, 13:18",
      desc: "Pengambilan Dana #2402939839013",
      amount: "Rp250.000",
    },
    {
      id: 2,
      date: "7 Okt 2023, 13:18",
      desc: "Pengambilan Dana #2402939839013",
      amount: "Rp250.000",
    },
    {
      id: 3,
      date: "7 Okt 2023, 13:18",
      desc: "Pengambilan Dana #2402939839013",
      amount: "Rp250.000",
    },
    {
      id: 4,
      date: "7 Okt 2023, 13:18",
      desc: "Pengambilan Dana #2402939839013",
      amount: "Rp250.000",
    },
  ];

  return (
    <div className="flex flex-col gap-8">
      <section className="flex flex-col items-start bg-white rounded-xl p-8 gap-8">
        <article className="flex flex-col">
          <h6 className="text-neutral-500">Saldo Saya</h6>
          <h3 className="text-heading3">Rp0</h3>
        </article>
        <Button
          color="primary"
          radius="sm"
          onClick={() =>
            document
              .getElementById("my_modal_1")
              .showModal()
          }
        >
          Tarik Dana
        </Button>
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box">
            <div className="flex flex-col">
              <p className="text-heading4">Tarik Dana</p>
              <div className="rounded-xl bg-[#FEFAED] border-[#FBC947] flex px-4 py-4 items-center justify-start">
                <div className="w-7 h-7">
                  <InfoOutlineIcon />
                </div>
                <div>
                  <p className="text-paragraph8 ml-3">
                    Penarikan dana dikenakan Biaya Admin
                    Rp5.000 dan akan terproses
                    selambat-lambatnya dalam waktu 3 (tiga)
                    hari kerja.{" "}
                  </p>
                </div>
              </div>
              <p className="py-4 my -2 text-heading6">
                Jumlah yang Ingin Ditarik
              </p>
              <Input
                type="text"
                placeholder="Harga"
                variant="bordered"
                size="lg"
                classNames={{
                  inputWrapper: "p-0 overflow-hidden",
                }}
                startContent={
                  <div className="bg-greyBackground border-r-1 h-full w-[42px] flex justify-center items-center">
                    <p className="text-center text-paragraph9">
                      Rp
                    </p>
                  </div>
                }
              />
              <p className="mt-3 text-paragraph">
                Minimum Rp20.000
              </p>
              <p className="text-heading6 mt-6">
                Tujuan Bank
              </p>
              <p className="text-paragraph mt-2">
                Kamu belum mengatur Rekening Bank. Silahkan
                kamu atur di Rekening Saya
              </p>

              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <div className="flex items-center justify-end gap-x-2">
                  <button className="btn bg-white text-textGrey text-paragraph4Res">
                    Batal
                  </button>
                  <button className="btn bg-primary text-white text-paragraph4Res">
                    Tarik Dana
                  </button>
                </div>
              </form>
            </div>
          </div>
        </dialog>
      </section>
      <section className="p-8 bg-white rounded-lg flex flex-col">
        <DataTable
          className="custom-scrollbar"
          columns={columns}
          data={data}
          subHeader
          customStyles={customStyles}
          subHeaderComponent={
            <div className="flex flex-col items-start gap-3 md:gap-0 md:flex-row justify-between w-full md:items-center ">
              <h1 className="text-heading6">Riwayat</h1>
              <div className="w-full md:w-auto">
                <Input
                  variant="bordered"
                  color="primary"
                  placeholder="Cari riwayat disini..."
                  radius="sm"
                  endContent={<SearchIcon />}
                />
              </div>
            </div>
          }
        />
        {/* <div className="flex justify-between items-center">
          <h4 className="text-heading4">Riwayat</h4>
          <input
            type="date"
            className="border-2 rounded-lg py-2 px-4 cursor-pointer focus:outline-primary"
          />
        </div>
        <table></table> */}
      </section>
    </div>
  );
};

export default SaldoScreen;
