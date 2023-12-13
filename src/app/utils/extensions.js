import React from "react";

export const CurrencyConverter = ({ amount }) => {
  const formattedAmount = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(amount);

  return <span>{formattedAmount}</span>;
};

const formatDate = (isoDate) => {
  const options = {
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  };
  const date = new Date(isoDate);
  return date.toLocaleDateString("en-US", options);
};

export const DateConverter = ({ isoDate }) => {
  const formattedDate = formatDate(isoDate);

  return <span>{formattedDate}</span>;
};

export function formatRupiah(number) {
  const formattedNumber = number.toLocaleString("id-ID");
  return formattedNumber;
}

export const createSlug = (text) => {
  text = text.toLowerCase();
  text = text.replace(/ /g, "-");
  text = text.replace(/[^a-z0-9-]/g, "");
  return text;
};

export const dateConverterWithFormat = (date = "") => {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const [datePart, timePart] = date?.split(" ");
  const [year, month, day] = datePart.split("-");
  const finalDate = new Date(
    `${month}/${day}/${year} ${timePart}`
  );
  const resultFormat = finalDate.toLocaleDateString(
    "id-ID",
    options
  );
  return resultFormat;
};
