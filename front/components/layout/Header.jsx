import Theme from "@/components/common/Theme";
import logo from "@/public/logo.svg";
import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <Wrapper>
      <Link href="/">
        <Container>
          <Image src={logo} width={30} height={30} alt="img"></Image>
          <Title>TODO LIST</Title>
        </Container>
      </Link>

      <Container>
        <Link href="/auth/login" passHref>
          <LinkBox>
            <LinkText>로그인</LinkText>
          </LinkBox>
        </Link>
        <Link href="/auth/signup" passHref>
          <LinkBox>
            <LinkText>회원가입</LinkText>
          </LinkBox>
        </Link>
        <Theme></Theme>
      </Container>
    </Wrapper>
  );
}

export default Header;

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 0px 24px;
  background-color: var(--textBox);
  & * {
    background-color: inherit;
  }
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;
const Title = styled.h1`
  font: var(--headline24);
`;
const LinkBox = styled.div`
  padding: 8px 16px;
  cursor: pointer;
`;
const LinkText = styled.p`
  font: var(--body16);
`;
