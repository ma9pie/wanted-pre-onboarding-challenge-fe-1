import CommonLayout from "@/layouts/CommonLayout";
import React from "react";

function Login() {
  return <div>Login</div>;
}

export default Login;

Login.getLayout = function getLayout(page) {
  return <CommonLayout>{page}</CommonLayout>;
};
