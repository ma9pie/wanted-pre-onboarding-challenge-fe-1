import CommonLayout from "@/layouts/CommonLayout";
import styled from "@emotion/styled";
import React from "react";

function Home() {
  return <Wrapper></Wrapper>;
}

export default Home;

Home.getLayout = function getLayout(page) {
  return <CommonLayout>{page}</CommonLayout>;
};

const Wrapper = styled.div``;
