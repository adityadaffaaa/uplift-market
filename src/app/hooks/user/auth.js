import axios from "../../lib/axios";
export const useAuth = () => {
  // const {
  //   data: user,
  //   error,
  //   mutate,
  // } = useSWR("/api/user/data", () =>
  //   axios
  //     .get("/api/user/data", {
  //       headers: {
  //         Authorization: `Bearer ${token && token}`,
  //       },
  //     })
  //     .then((res) => {
  //       return res.data;
  //     })
  //     .catch((error) => {
  //       if (error.response?.status !== 422) {
  //         setAlerts((values) => [
  //           ...values,
  //           error.response.data.message,
  //         ]);
  //         throw error;
  //       }
  //     })
  // );
  //   const csrf = () => axios.get("/sanctum/csrf-cookie");

  const register = async ({ setAlerts, ...props }) => {
    // await csrf();

    setAlerts([]);

    const res = await axios
      .post("/api/register", props)
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
    // setAlerts([]);

    const res = await axios
      .post("/api/login", props)
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
        // }
        return error;
      });

    return res;
  };

  const loginGoogle = async ({ setAlerts }) => {
    setAlerts([]);

    const res = await axios
      .get("/login/google")
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

  const authGoogleData = async (url) => {
    const res = await axios
      .get(url)
      .then((res) => res.data)
      .catch((error) => console.error(error));

    return res;
  };

  const loginGoogleCallback = async () => {
    const res = await axios
      .get("/login/google/callback")
      .then((res) => res.data)
      .catch((error) => console.error(error));

    return res;
  };

  const forgotPassword = async ({
    setAlerts,
    ...props
  }) => {
    setAlerts([]);

    const res = await axios
      .post("/api/forgot-password", props)
      .then((res) => res)
      .catch((error) => {
        if (error.code === "ERR_NETWORK") {
          setAlerts((values) => [...values, error.message]);
        }
        if (error.response?.status !== 422) {
          setAlerts((values) => [
            ...values,
            error.response.data.message,
          ]);
        }
      });

    return res;
  };

  const resetPassword = async ({ setAlerts, ...props }) => {
    setAlerts([]);

    const res = await axios
      .post("/api/reset-password", props)
      .then((res) => res)
      .catch((error) => {
        if (error.code === "ERR_NETWORK") {
          setAlerts((values) => [...values, error.message]);
        }
        if (error.response?.status !== 422) {
          setAlerts((values) => [
            ...values,
            error.response.data.message,
          ]);
        }
      });

    return res;
  };

  const logout = async ({ setAlerts, token }) => {
    const res = await axios
      .post("/api/logout", null, {
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

  // useEffect(() => {
  //   if (
  //     middleware === "guest" &&
  //     redirectIfAuthenticated &&
  //     user
  //   )
  //     router.push(redirectIfAuthenticated);
  //   if (
  //     window.location.pathname === "/verify-email" &&
  //     user?.email_verified_at
  //   )
  //     router.push(redirectIfAuthenticated);
  //   if (middleware === "auth" && error) logout();
  // }, [user, error]);

  return {
    // user,
    register,
    login,
    loginGoogle,
    authGoogleData,
    loginGoogleCallback,
    forgotPassword,
    resetPassword,
    logout,
  };
};
