"use client";

import React from "react";
import RecentActivityCard from "./RecentActivityCard";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const options = {
  responsive: true,

  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
};

const labels = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const data = {
  labels,
  datasets: [
    {
      label: "Total Pesanan",
      data: labels.map(() =>
        faker.datatype.number({ min: 0, max: 9 })
      ),
      borderColor: "#1C9275",
      backgroundColor: "rgba(28, 146, 117, 0.2)",
      pointBackgroundColor: "#1C9275",
      tension: 0.4,
      fill: true,
    },
  ],
};

const BodySection = () => {
  return (
    <section>
      <CardTotalPesanan />
    </section>
  );
};

const CardTotalPesanan = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col p-5 shadow-defaultShadow bg-white rounded-lg border-2 gap-3">
        <article className="flex flex-col gap-1">
          <h6 className="text-paragraph1Res lg:text-heading4">
            Total Pesanan
          </h6>
          <p className="text-paragraph8">5.987,34</p>
        </article>
        <Line
          options={options}
          data={data}
          style={{
            maxHeight: "100%",
            maxWidth: "100%",
          }}
        />
      </div>
      <div className="hidden lg:block">
        <RecentActivityCard />
      </div>
    </div>
  );
};

export default BodySection;
