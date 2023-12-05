import axios from "../../lib/axios";

export const useShipment = () => {
  const getOrderShipment = async ({ setAlerts, token }) => {
    setAlerts([]);
    const res = await axios
      .get("/api/shipment/get", {
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
            error.response.message,
          ]);
        }
        return error;
      });

    return res;
  };

  return {
    getOrderShipment,
  };
};
