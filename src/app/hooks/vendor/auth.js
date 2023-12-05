import axios from "../../lib/axios";

export const useAuth = () => {
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
        setAlerts((values) => [
          ...values,
          error.response.data.message,
        ]);
        return error;
      });

    return res;
  };
  const loginVendor = async ({ setAlerts, ...props }) => {
    const res = await axios
      .post("/api/vendor/login", props)
      .then((res) => res)
      .catch((error) => {
        // if (error.code === "ERR_NETWORK") {
        //   setAlerts((values) => [...values, error.message]);
        // }
        // if (error.response.status !== 422) {
        //   setAlerts((values) => [
        //     ...values,
        //     error.response.data.message,
        //   ]);
        //   throw error;
        // }
        return error;
      });

    return res;
  };

  const logout = async ({ setAlerts, token }) => {
    const res = await axios
      .post("/api/vendor/logout", null, {
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
        return error;
      });

    return res;
  };

  return { regis, loginVendor, logout };
};
