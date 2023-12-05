import axios from "../../lib/axios";

export const useCategory = () => {
  const getCategories = async ({ setAlerts }) => {
    setAlerts([]);
    const res = await axios
      .get("/api/category")
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
    getCategories,
  };
};
