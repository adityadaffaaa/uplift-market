import axios from "../lib/axios";

export const useAddress = () => {
  const getProvince = async ({ setAlerts }) => {
    setAlerts([]);

    const res = await axios
      .get("/api/province")
      .then((res) => res.data)
      .catch((error) => {
        if (error.code === "ERR_NETWORK") {
          setAlerts((values) => [...values, error.message]);
        }
        if (error.response.status !== 422) {
          setAlerts((values) => [
            ...values,
            error.response.data.message,
          ]);
          return error;
        }
      });
    return res;
  };

  const getCity = async ({ setAlerts, ...props }) => {
    setAlerts([]);

    const res = await axios
      .post("/api/city", props)
      .then((res) => res.data)
      .catch((error) => {
        if (error.code === "ERR_NETWORK") {
          setAlerts((values) => [...values, error.message]);
        }
        if (error.response.status !== 422) {
          setAlerts((values) => [
            ...values,
            error.response.data.message,
          ]);
          return error;
        }
      });
    return res;
  };

  const getDistrict = async ({ setAlerts, ...props }) => {
    setAlerts([]);

    const res = await axios
      .post("/api/district", props)
      .then((res) => res.data)
      .catch((error) => {
        if (error.code === "ERR_NETWORK") {
          setAlerts((values) => [...values, error.message]);
        }
        if (error.response.status !== 422) {
          setAlerts((values) => [
            ...values,
            error.response.data.message,
          ]);
          return error;
        }
      });
    return res;
  };

  const getVillage = async ({ setAlerts, ...props }) => {
    setAlerts([]);

    const res = await axios
      .post("/api/village", props)
      .then((res) => res.data)
      .catch((error) => {
        if (error.code === "ERR_NETWORK") {
          setAlerts((values) => [...values, error.message]);
        }
        if (error.response.status !== 422) {
          setAlerts((values) => [
            ...values,
            error.response.data.message,
          ]);
          return error;
        }
      });
    return res;
  };
  const getGeoLocation = async ({
    setAlerts,
    ...props
  }) => {
    setAlerts([]);

    const res = await axios
      .post("/api/location", props)
      .then((res) => res.data)
      .catch((error) => {
        if (error.code === "ERR_NETWORK") {
          setAlerts((values) => [...values, error.message]);
        }
        if (error.response.status !== 422) {
          setAlerts((values) => [
            ...values,
            error.response.data.message,
          ]);
          return error;
        }
      });
    return res;
  };

  const getSearchLocation = async ({
    setAlerts,
    ...props
  }) => {
    setAlerts([]);

    const res = await axios
      .post("/api/location/search", props)
      .then((res) => res.data)
      .catch((error) => {
        if (error.code === "ERR_NETWORK") {
          setAlerts((values) => [...values, error.message]);
        }
        if (error.response.status !== 422) {
          setAlerts((values) => [
            ...values,
            error.response.data.message,
          ]);
          return error;
        }
      });
    return res;
  };

  return {
    getProvince,
    getCity,
    getDistrict,
    getVillage,
    getGeoLocation,
    getSearchLocation,
  };
};
