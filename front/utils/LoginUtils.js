const LoginUtils = () => {};

LoginUtils.isLogin = () => {
  if (typeof window !== "object") {
    return false;
  }
  const Authorization = localStorage.getItem("Authorization");
  return Authorization ? true : false;
};

export default LoginUtils;
