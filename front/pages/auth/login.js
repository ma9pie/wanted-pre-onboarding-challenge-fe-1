import LargeButton from "@/components/common/Buttons/LargeButton";
import LineInput from "@/components/common/Inputs/LineInput";
import Loading from "@/components/common/Loading";
import regExp from "@/constants/regExp";
import CommonLayout from "@/layouts/CommonLayout";
import { memberState } from "@/recoil/atom";
import AxiosUtils from "@/utils/AxiosUtils";
import styled from "@emotion/styled";
import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useRecoilState } from "recoil";

function Login() {
  const router = useRouter();
  const [member, setMember] = useRecoilState(memberState);

  const [email, setEmail] = useState("");
  const [emailErrMsg, setEmailErrMsg] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleEmail = (e) => {
    const { value } = e.target;
    if (!regExp.emailCheckRegExp.test(value)) {
      setEmailErrMsg("이메일 형식에 맞지 않습니다.");
    } else {
      setEmailErrMsg("");
    }
    setEmail(value);
  };

  const handlePassword = (e) => {
    const { value } = e.target;
    setPassword(value);
  };

  const login = () => {
    const req = {
      email: email,
      password: password,
    };
    setIsLoading(true);
    AxiosUtils.post("/users/login", req)
      .then((res) => {
        const { token } = res.data;
        setMember({ ...member, email: email, token: token });
        Cookies.set("Authorization", token);
        router.push("/");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !disableButton()) {
      login();
    }
  };

  const disableButton = () => {
    return emailErrMsg || !email || !password;
  };

  return (
    <Wrapper>
      <ContentWrapper>
        <TitleBox>
          <Link href="/" passHref>
            <Title>LOGIN</Title>
          </Link>
        </TitleBox>

        <InputBoxContainer>
          <InputBox>
            <LineInput
              type="text"
              label="이메일"
              value={email}
              placeholder="이메일을 입력해주세요."
              errorMsg={emailErrMsg}
              onChange={handleEmail}
              onKeyUp={handleKeyPress}
            ></LineInput>
          </InputBox>
          <InputBox>
            <LineInput
              type="password"
              label="비밀번호"
              value={password}
              placeholder="비밀번호를 입력해주세요."
              onChange={handlePassword}
              onKeyUp={handleKeyPress}
            ></LineInput>
          </InputBox>
        </InputBoxContainer>

        <LargeButton disabled={isLoading || disableButton()} onClick={login}>
          {isLoading ? <Loading color="white"></Loading> : "로그인"}
        </LargeButton>

        <TextLine>
          <Link href="/signup" passHref>
            <LinkText>회원가입하기</LinkText>
          </Link>
        </TextLine>
      </ContentWrapper>
    </Wrapper>
  );
}

export default Login;

Login.getLayout = function getLayout(page) {
  return <CommonLayout>{page}</CommonLayout>;
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  min-height: calc(100vh - 108px);
  padding: 80px 0px;
  background-color: var(--sectionLine);
`;
const ContentWrapper = styled.div`
  width: 100%;
  max-width: 450px;
  margin: 0px auto;
  padding: 40px;
  background-color: var(--bg);
`;
const TitleBox = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 64px;
`;
const Title = styled.p`
  font-size: 48px;
  font-weight: 900;
  color: var(--brandColor);
`;
const InputBoxContainer = styled.div`
  margin-bottom: 160px;
`;
const InputBox = styled.div`
  margin-bottom: 24px;
`;
const TextLine = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-top: 24px;
`;
const LinkText = styled.p`
  font: var(--body14);
  color: var(--brandColor);
  text-decoration: underline;
  text-underline-position: under;
`;
