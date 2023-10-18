import axios from "../lib/axios";

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

  return {
    getProfile,
    getListProfile,
  };
};
