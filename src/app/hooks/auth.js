import axios from "../lib/axios";

export const useAuth = () => {
  //   const csrf = () => axios.get("/sanctum/csrf-cookie");

  const register = async ({ setAlerts, ...props }) => {
    // await csrf();

    setAlerts([]);

    const res = await axios
      .post("/register", props)
      .then((res) => res)
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

  const login = async ({ setAlerts, ...props }) => {
    setAlerts([]);

    const res = await axios
      .post("/login", props)
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
  const loginGoogle = ({
    setError,
    setStatus,
    ...props
  }) => {
    setError([]);
    setStatus(null);

    axios
      .post("/login", props)
      .then((res) => res.data)
      .catch((error) => console.error(error));
  };

  const logout = async (token) => {
    const res = await axios
      .post("/logout", null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => res.data)
      .catch((err) => console.error(err));

    window.location.pathname = "/";

    return res;
  };

  return {
    register,
    login,
    loginGoogle,
    logout,
  };
};
