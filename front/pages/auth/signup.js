import LargeButton from "@/components/common/Buttons/LargeButton";
import LineInput from "@/components/common/Inputs/LineInput";
import Loading from "@/components/common/Loading";
import regExp from "@/constants/regExp";
import CommonLayout from "@/layouts/CommonLayout";
import AxiosUtils from "@/utils/AxiosUtils";
import ModalUtils from "@/utils/ModalUtils";
import styled from "@emotion/styled";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

function SignUp() {
  const router = useRouter();

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    rePassword: "",
  });
  const [errMsgs, setErrMsgs] = useState({
    email: "",
    password: "",
    rePassword: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleInputs = (e) => {
    const { name } = e.target;
    const input = e.target.value.trim();
    const tmpErrMsgs = { ...errMsgs };

    setInputs({ ...inputs, [name]: input });

    switch (name) {
      case "email":
        tmpErrMsgs.email =
          input && !regExp.emailCheckRegExp.test(input)
            ? "이메일 형식에 맞지 않습니다."
            : "";
        break;
      case "password":
        tmpErrMsgs.password =
          input && !regExp.passwordCheckRegExp.test(input)
            ? "최소 8자 이상, 하나 이상의 문자와 하나의 숫자를 입력해주세요."
            : "";
        break;
      case "rePassword":
        tmpErrMsgs.rePassword =
          inputs.password !== input ? "비밀번호가 일치하지 않습니다." : "";
        break;
    }
    setErrMsgs(tmpErrMsgs);
  };

  const signup = () => {
    const req = {
      email: inputs.email,
      password: inputs.password,
    };

    setIsLoading(true);
    AxiosUtils.post("/users/create", req)
      .then((res) => {
        ModalUtils.openAlert({
          message: res.data.message,
          onAfterClose: () => router.push("/auth/login"),
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !disableButton()) {
      signup();
    }
  };

  const disableButton = () => {
    return (
      !inputs.email ||
      !inputs.password ||
      !inputs.rePassword ||
      errMsgs.email ||
      errMsgs.password ||
      errMsgs.rePassword
    );
  };

  return (
    <Wrapper>
      <ContentWrapper>
        <TitleBox>
          <Link href="/" passHref>
            <Title>SIGNUP</Title>
          </Link>
        </TitleBox>

        <InputBoxContainer>
          <InputBox>
            <LineInput
              type="text"
              name="email"
              label="이메일"
              placeholder="이메일을 입력해주세요."
              value={inputs.email}
              errorMsg={errMsgs.email}
              onChange={handleInputs}
              onKeyUp={handleKeyPress}
            ></LineInput>
          </InputBox>
          <InputBox>
            <LineInput
              type="password"
              name="password"
              label="비밀번호"
              placeholder="비밀번호를 입력해주세요."
              value={inputs.password}
              errorMsg={errMsgs.password}
              onChange={handleInputs}
              onKeyUp={handleKeyPress}
            ></LineInput>
          </InputBox>
          <InputBox>
            <LineInput
              type="password"
              name="rePassword"
              label="비밀번호 재확인"
              placeholder="비밀번호를 입력해주세요."
              value={inputs.rePassword}
              errorMsg={errMsgs.rePassword}
              onChange={handleInputs}
              onKeyUp={handleKeyPress}
            ></LineInput>
          </InputBox>
        </InputBoxContainer>

        <LargeButton disabled={isLoading || disableButton()} onClick={signup}>
          {isLoading ? <Loading color="white"></Loading> : "회원가입하기"}
        </LargeButton>
      </ContentWrapper>
    </Wrapper>
  );
}

export default SignUp;

SignUp.getLayout = function getLayout(page) {
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
