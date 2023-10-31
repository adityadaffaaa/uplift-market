import axios from "../../lib/axios";

export const useProduct = () => {
  const getListProduct = async ({ setAlerts, token }) => {
    setAlerts([]);

    const res = await axios
      .get("/api/vendor/product", {
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

  return {
    getListProduct,
  };
};
