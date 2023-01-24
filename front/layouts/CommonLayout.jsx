import Footer from "@/components/layout/Footer";
import Head from "@/components/layout/Head";
import Header from "@/components/layout/Header";
import styled from "@emotion/styled";
import React from "react";

function CommonLayout(props) {
  return (
    <Container>
      <Head></Head>
      <Header></Header>
      <BodyContent>{props.children}</BodyContent>
      <Footer></Footer>
    </Container>
  );
}

export default CommonLayout;

const Container = styled.div`
  height: 100vh;
`;
const BodyContent = styled.div`
  min-height: calc(100% - 108px);
`;
