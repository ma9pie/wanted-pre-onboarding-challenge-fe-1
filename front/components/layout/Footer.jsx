import styled from "@emotion/styled";
import React from "react";

function Footer() {
  return (
    <Wrapper>
      <Text>원티드 프리온보딩 챌린지 프론트엔드 코스 사전과제</Text>
    </Wrapper>
  );
}

export default Footer;

const Wrapper = styled.footer`
  position: relative;
  height: 48px;
  padding: 16px;
  background-color: var(--textBox);
  & * {
    background-color: inherit;
  }
`;
const Text = styled.p`
  text-align: right;
`;
