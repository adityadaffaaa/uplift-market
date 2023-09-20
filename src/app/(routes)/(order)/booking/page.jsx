"use client";

import React, { useState } from "react";
import OrderDataSection from "./components/OrderDataSection";
import OrderSummarySection from "./components/OrderSummarySection";
import Toast from "@/app/components/Toast";

const Booking = () => {
  const [formData, setFromData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    briefText: "",
    briefDocument: "",
  });

  const [error, setError] = useState({
    name: false,
    email: false,
    phoneNumber: false,
    briefText: false,
    briefDocument: false,
  });

  const [alerts, setAlerts] = useState([]);

  const handleChange = (event) => {
    const key = event.target.id;
    const value = event.target.value;
    setFromData((values) => ({
      ...values,
      [key]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const validateField = ({
      fieldName,
      pattern,
      errorMessage,
    }) => {
      let errMsg;
      alerts.splice(0, alerts.length);
      if (!formData[fieldName]) {
        errMsg = `${errorMessage} wajib diisi!`;
        setError((err) => ({
          ...err,
          [fieldName]: true,
        }));
        setAlerts((al) => [...al, errMsg]);
      } else if (
        pattern &&
        !pattern.test(formData[fieldName])
      ) {
        errMsg = `${errorMessage} tidak valid!`;
        setError((err) => ({
          ...err,
          [fieldName]: true,
        }));
        setAlerts((al) => [...al, errMsg]);
      } else {
        setError((err) => ({
          ...err,
          [fieldName]: false,
        }));
      }
    };

    validateField({
      fieldName: "name",
      pattern: null,
      errorMessage: "Nama",
    });
    validateField({
      fieldName: "email",
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      errorMessage: "Email",
    });
    validateField({
      fieldName: "phoneNumber",
      pattern: /^[0-9]{10,16}$/,
      errorMessage: "No. hp",
    });
    validateField({
      fieldName: "briefText",
      pattern: null,
      errorMessage: "Brief pemesanan",
    });
    validateField({
      fieldName: "briefDocument",
      pattern: null,
      errorMessage: "Brief dokumen",
    });
  };

  return (
    <>
      <Toast alerts={alerts} duration={2000} start />
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-8 lg:flex-row lg:items-start xl:px-36"
      >
        <OrderDataSection
          onChange={handleChange}
          formData={formData}
          error={error}
        />
        <OrderSummarySection on />
      </form>
    </>
  );
};

export default Booking;
