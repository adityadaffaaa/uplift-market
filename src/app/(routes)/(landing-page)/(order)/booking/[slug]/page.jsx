"use client";

import React, { useState, useEffect } from "react";
import OrderDataSection from "../components/OrderDataSection";
import OrderSummarySection from "../components/OrderSummarySection";
import {
  Toast,
  LoadingIndicator,
  OrderSummarySkeleton,
} from "@/app/components";
import { useOrder } from "@/app/hooks/user/order";
import { useDisclosure } from "@nextui-org/react";
import { useProduct } from "@/app/hooks/user/product";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Booking = ({ params }) => {
  const { getOneProduct } = useProduct();
  const { orderProduct } = useOrder();
  const { data: session } = useSession();
  const router = useRouter();

  const { isOpen, onOpen, onOpenChange, onClose } =
    useDisclosure();

  const [alerts, setAlerts] = useState([]);
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchOneProduct = async () => {
    if (!product) {
      const { slug } = params;
      try {
        const res = await getOneProduct({
          setAlerts,
          slug,
        });

        if (res.status === 200) {
          setProduct(res.data.data);
        }
      } catch (error) {
        console.error("Something wrong", error);
      }
    }
  };

  useEffect(() => {
    fetchOneProduct();
  }, []);

  const [formData, setFromData] = useState({
    title: "",
    briefText: "",
    briefLink: "",
    adminFee: 0,
    quantity: 1,
  });

  const [error, setError] = useState({
    title: false,
    briefText: false,
    briefLink: false,
  });

  const handleChange = (event) => {
    const key = event.target.id;
    const value = event.target.value;
    setFromData((values) => ({
      ...values,
      [key]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    let err = {
      title: false,
      briefText: false,
      briefLink: false,
    };

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
        err[fieldName] = true;
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
        err[fieldName] = true;
        setAlerts((al) => [...al, errMsg]);
      } else {
        setError((err) => ({
          ...err,
          [fieldName]: false,
        }));
        err[fieldName] = false;
      }
    };

    validateField({
      fieldName: "title",
      pattern: null,
      errorMessage: "Judul",
    });

    validateField({
      fieldName: "briefText",
      pattern: null,
      errorMessage: "Brief pemesanan",
    });
    validateField({
      fieldName: "briefLink",
      pattern: null,
      errorMessage: "Brief link",
    });

    if (!err.title && !err.briefText && !err.briefLink) {
      try {
        onOpen();
        setIsLoading(true);
        const {
          adminFee,
          briefLink,
          briefText,
          title,
          quantity,
        } = formData;

        const token = session.user.token;

        const res = await orderProduct({
          setAlerts,
          slug: params.slug,
          token,
          quantity,
          admin_fee: adminFee,
          title,
          brief: briefText,
          link: briefLink,
        });

        if (res.status === 200) {
          const redirectUrl = res.data.data.redirect_url;
          router.push(redirectUrl);
          setIsLoading(false);
        }
      } catch (error) {
        onClose();
        setIsLoading(false);
        console.error("Something wrong", error);
      }
    }
  };

  return (
    <>
      <LoadingIndicator
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      />
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
        {product ? (
          <OrderSummarySection
            product={product}
            isLoading={isLoading}
          />
        ) : (
          <OrderSummarySkeleton />
        )}
      </form>
    </>
  );
};

export default Booking;
