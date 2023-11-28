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

  return {
    getListProduct,
    getOneProduct,
  };
};
