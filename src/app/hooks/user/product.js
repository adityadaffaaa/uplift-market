import axios from "../../lib/axios";

export const useProduct = () => {
  const getListProduct = async ({ setAlerts }) => {
    const res = await axios
      .get("/api/product")
      .then((res) => res)
      .catch((error) => {
        if (error.code === "ERR_NETWORK") {
          setAlerts.push(error.message);
        }
        if (error.response.status !== 422) {
          setAlerts.push(error.message);
        }
        return error;
      });

    return res;
  };

  const getOneProduct = async ({ slug, setAlerts }) => {
    const res = await axios
      .get(`/api/product/${slug}`)
      .then((res) => res)
      .catch((error) => {
        if (error.code === "ERR_NETWORK") {
          setAlerts.push(error.message);
        }
        if (error.response.status !== 422) {
          setAlerts.push(error.message);
        }
        return error;
      });

    return res;
  };

  const getPopularProducts = async ({ setAlerts }) => {
    const res = await axios
      .get("/api/product/popular")
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

  const filterProduct = async ({ setAlerts, ...props }) => {
    const res = await axios
      .get(`/api/product`)
      .then((res) => res)
      .catch((error) => {
        if (error.code === "ERR_NETWORK") {
          setAlerts.push(error.message);
        }
        if (error.response.status !== 422) {
          setAlerts.push(error.message);
        }
        return error;
      });

    return res;
  };

  return {
    getListProduct,
    getOneProduct,
    getPopularProducts,
    filterProduct,
  };
};
