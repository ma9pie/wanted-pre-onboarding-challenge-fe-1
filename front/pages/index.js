import TodoTable from "@/components/home/TodoTable";
import CommonLayout from "@/layouts/CommonLayout";
import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";

function Home() {
  return (
    <Wrapper>
      <TodoTable></TodoTable>
    </Wrapper>
  );
}

export default Home;

Home.getLayout = function getLayout(page) {
  return <CommonLayout>{page}</CommonLayout>;
};

const Wrapper = styled.div``;
