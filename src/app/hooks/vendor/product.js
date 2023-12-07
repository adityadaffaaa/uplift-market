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

  const addProduct = async ({
    setAlerts,
    token,
    ...props
  }) => {
    setAlerts([]);

    const res = await axios
      .post("/api/vendor/product", props, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => res)
      .catch((error) => {
        if (error.code === "ERR_NETWORK") {
          setAlerts((values) => [...values, error.message]);
        }
        // if (error.response.status !== 422) {
        //   setAlerts((values) => [
        //     ...values,
        //     error.response.data.message,
        //   ]);
        // }
        setAlerts((values) => [
          ...values,
          error.response.data.message,
        ]);
        return error;
      });

    return res;
  };

  const deleteProduct = async ({
    setAlerts,
    slug,
    token,
  }) => {
    setAlerts([]);

    const res = await axios
      .delete(`/api/vendor/product/${slug}`, {
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
        }
        return error;
      });

    return res;
  };

  return {
    getListProduct,
    addProduct,
    deleteProduct,
  };
};
