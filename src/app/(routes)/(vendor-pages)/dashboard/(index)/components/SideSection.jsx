"use client";

import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Doughnut, Bar } from "react-chartjs-2";
import RecentActivityCard from "./RecentActivityCard";

import { faker } from "@faker-js/faker";

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
);

/** DOUGHNUT CHART */
const doughnutOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: "bottom",
      labels: {
        pointStyle: "circle",
        usePointStyle: true,
      },
    },
  },
};

const doughnutData = {
  labels: ["Fotografi", "Videografi", "Design"],
  datasets: [
    {
      label: "Kategori Pesanan",
      data: [25, 50, 25],
      backgroundColor: ["#0E493A", "#1C9275", "#68B6A3"],
      borderColor: ["#0E493A", "#1C9275", "#68B6A3"],
    },
  ],
};

/** BAR CHART */
const barOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
};

const labels = ["Senin", "Selasa", "Rabu", "Kamis"];

const barData = {
  labels,
  datasets: [
    {
      label: "Total Views",
      data: labels.map(() =>
        faker.datatype.number({ min: 0, max: 500 })
      ),
      backgroundColor: "#1C9275",
      maxBarThickness: 14,
      minBarThickness: 10,
      borderRadius: 8,
    },
  ],
};

const SideSection = () => {
  return (
    <aside className="flex flex-col gap-4 lg:flex-[1_1_35%]">
      <KategoriPesananCard />
      <TotalViewsCard />
      <div className="lg:hidden">
        <RecentActivityCard />
      </div>
    </aside>
  );
};

const KategoriPesananCard = () => {
  return (
    <div className="flex flex-col p-5 shadow-defaultShadow bg-white rounded-lg border-2 gap-3 w-full">
      <h6 className="text-paragraph1Res lg:text-heading4">
        Kategori Pesanan
      </h6>
      <Doughnut
        data={doughnutData}
        options={doughnutOptions}
        style={{ maxWidth: "100%", maxHeight: "100%" }}
      />
    </div>
  );
};

const TotalViewsCard = () => {
  return (
    <div className="flex flex-col p-5 shadow-defaultShadow bg-white rounded-lg border-2 gap-3">
      <article className="flex flex-col gap-1">
        <h6 className="text-paragraph1Res lg:text-heading4">Total Views</h6>
        <p className="text-paragraph8">5.987,34</p>
      </article>
      <Bar
        data={barData}
        options={barOptions}
        style={{
          maxWidth: "100%",
          maxHeight: "100%",
        }}
      />
    </div>
  );
};

export default SideSection;
