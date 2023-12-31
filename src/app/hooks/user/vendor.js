import axios from "../../lib/axios";

export const useVendor = () => {
  const getVendorProfile = async ({
    setAlerts,
    slug,
    token,
  }) => {
    setAlerts([]);

    const res = await axios
      .get(`/api/${slug}`, {
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
    getVendorProfile,
  };
};
