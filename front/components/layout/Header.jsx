import ExtraSmallButton from "@/components/common/Buttons/ExtraSmallButton";
import TextButton from "@/components/common/Buttons/TextButton";
import Theme from "@/components/common/Theme";
import logo from "@/public/logo.svg";
import { memberState } from "@/recoil/atom";
import ModalUtils from "@/utils/ModalUtils";
import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useRecoilValue, useResetRecoilState } from "recoil";

function Header() {
  const member = useRecoilValue(memberState);
  const resetMemberState = useResetRecoilState(memberState);

  const logout = () => {
    ModalUtils.openConfirm({
      message: "로그아웃 하시겠습니까?",
      onRequestConfirm: () => {
        localStorage.removeItem("Authorization");
        resetMemberState();
      },
    });
  };

  return (
    <Wrapper>
      <Link href="/">
        <a>
          <Container>
            <Image src={logo} width={30} height={30} alt="img"></Image>
            <Title>TODO LIST</Title>
          </Container>
        </a>
      </Link>

      {member.token ? (
        <Container>
          <TextButton onClick={logout}>{member.email}</TextButton>
          <Theme></Theme>
        </Container>
      ) : (
        <Container>
          <Link href="/auth/login" passHref>
            <a>
              <ExtraSmallButton>로그인</ExtraSmallButton>
            </a>
          </Link>
          <Link href="/auth/signup" passHref>
            <a>
              <ExtraSmallButton>회원가입</ExtraSmallButton>
            </a>
          </Link>
          <Theme></Theme>
        </Container>
      )}
    </Wrapper>
  );
}

export default Header;

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 0px 16px;
  background-color: var(--textBox);
  & * {
    background-color: inherit;
  }
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
const Title = styled.h1`
  font: var(--headline24);
`;
const LinkBox = styled.div`
  padding: 8px 4px;
  cursor: pointer;
`;
const LinkText = styled.p`
  font: var(--body16);
`;
