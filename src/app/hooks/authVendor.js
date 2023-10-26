import axios from "../lib/axios";

export const authVendor = () => {
  const regis = async ({ setAlerts, ...props }) => {
    setAlerts([]);

    const res = await axios
      .post("/api/vendor/register", props, {
        headers: {
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
          throw error;
        }
      });

    return res;
  };
  const login = async ({ setAlerts, ...props }) => {
    setAlerts([]);

    const res = await axios
      .post("/api/vendor/login", props)
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

  return { regis, login };
};
