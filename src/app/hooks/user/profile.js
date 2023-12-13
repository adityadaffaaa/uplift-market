import axios from "../../lib/axios";

export const useProfile = () => {
  const getProfile = async ({ setAlerts, token }) => {
    const res = await axios
      .get("/api/user/data", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => res.data)
      .catch((error) => {
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

  const getListProfile = async () => {
    const res = await axios
      .get("/api/user")
      .then((res) => res.data)
      .catch((error) => {
        if (error.response.status !== 422) throw error;
        console.error(error);
      });
    return res;
  };

  const updateProfile = async ({
    setAlerts,
    token,
    ...props
  }) => {
    setAlerts([]);
    const res = await axios
      .post("/api/user/update", props, {
        headers: {
          Authorization: `Bearer ${token}`,
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
        }
        return error;
      });

    return res;
  };

  const updatePassword = async ({
    setAlerts,
    token,
    ...props
  }) => {
    setAlerts([]);
    const res = await axios
      .post("/api/user/password/update", props, {
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
    getProfile,
    getListProfile,
    updateProfile,
    updatePassword,
  };
};
