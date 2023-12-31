import axios from "../../lib/axios";

export const useOrder = () => {
  const orderProduct = async ({
    setAlerts,
    slug,
    token,
    ...props
  }) => {
    setAlerts([]);

    const res = await axios
      .post(`/api/order/store/${slug}`, props, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => res)
      .catch((error) => {
        if (error.code === "ERR_NETWORK") {
          setAlerts((values) => [...values, error.message]);
        }
        if (error.response.status !== 422) {
          setAlerts((values) => [
            ...values,
            error.response.data.message,
          ]);
          throw error;
        }
      });

    return res;
  };

  const getProjectInfo = async ({
    setAlerts,
    id,
    token,
  }) => {
    setAlerts([]);

    const res = await axios
      .get(`/api/project/info/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => res)
      .catch((error) => {
        if (error.code === "ERR_NETWORK") {
          setAlerts((values) => [...values, error.message]);
        }
        if (error.response.status !== 422) {
          setAlerts((values) => [
            ...values,
            error.response.data.message,
          ]);
          throw error;
        }
      });

    return res;
  };

  const storeShipmentSend = async ({
    setAlerts,
    id,
    token,
    ...props
  }) => {
    setAlerts([]);

    const res = await axios
      .post(`/api/shipment/send/store/${id}`, props, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => res)
      .catch((error) => {
        if (error.code === "ERR_NETWORK") {
          setAlerts((values) => [...values, error.message]);
        }
        if (error.response.status !== 422) {
          setAlerts((values) => [
            ...values,
            error.response.data.message,
          ]);
        }
        return error;
      });

    return res;
  };

  return {
    orderProduct,
    getProjectInfo,
    storeShipmentSend,
  };
};
