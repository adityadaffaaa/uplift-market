import axios from "../lib/axios";

export const useProduct = () => {
  const getListProduct = async () => {
    const res = await axios
      .get("/api/product")
      .then((res) => res.data)
      .catch((error) => {
        if (error.response.status !== 422) throw error;
        console.error(error);
      });

    return res;
  };

  const getOneProduct = async () => {};

  return {
    getListProduct,
    getOneProduct,
  };
};
