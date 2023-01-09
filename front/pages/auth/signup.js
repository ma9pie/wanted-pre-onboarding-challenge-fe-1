import CommonLayout from "@/layouts/CommonLayout";
import React from "react";

function Signup() {
  return <div>Signup</div>;
}

export default Signup;

Signup.getLayout = function getLayout(page) {
  return <CommonLayout>{page}</CommonLayout>;
};
