import CommonLayout from "@/layouts/CommonLayout";
import styled from "@emotion/styled";
import React from "react";

function Error404() {
  return (
    <Container>
      <TextBox>
        <Number>404</Number>
        <Text>Page Not Found</Text>
        <SubText>찾을 수 없는 페이지입니다.</SubText>
      </TextBox>
    </Container>
  );
}

export default Error404;

Error404.getLayout = function getLayout(page) {
  return <CommonLayout>{page}</CommonLayout>;
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 108px);
`;
const TextBox = styled.div``;
const Number = styled.div`
  font-size: 120px;
  color: var(--brand100);
`;
const Text = styled.div`
  font-size: 24px;
  margin-bottom: 24px;
`;
const SubText = styled.div`
  font-size: 16px;
`;
