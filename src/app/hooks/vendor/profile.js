import axios from "../../lib/axios";

export const useProfile = () => {
  const editProfile = async ({
    setAlerts,
    slug,
    token,
    ...props
  }) => {
    setAlerts([]);

    const res = await axios
      .post(`/api/vendor/update`, props, {
        headers: {
          Authorization: `Bearer ${token}`,
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

  return { editProfile };
};
