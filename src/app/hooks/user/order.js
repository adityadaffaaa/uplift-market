import axios from "../../lib/axios";

export const useOrder = () => {
  const orderProduct = async ({ setAlerts, ...props }) => {
    setAlerts([]);

    const res = await axios
      .post(`/api/order/store${props.slug}`, props)
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

  return {
    orderProduct,
  };
};
