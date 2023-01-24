import MediumButton from "@/components/common/Buttons/MediumButton";
import AxiosUtils from "@/utils/AxiosUtils";
import ModalUtils from "@/utils/ModalUtils";
import styled from "@emotion/styled";
import React, { useState, useEffect, useRef } from "react";

function TodoInput(props) {
  const titleRef = useRef(null);
  const [disableButton, setDisableButton] = useState(false);
  const [inputs, setInputs] = useState({
    title: "",
    content: "",
  });
  const { title, content } = inputs;

  // 마운트 시 title에 포커스
  useEffect(() => {
    titleRef.current.focus();
  }, []);

  // 추가 버튼 활성화
  useEffect(() => {
    setDisableButton(title === "" || content === "");
  }, [inputs]);

  // 입력 관리
  const handleInputs = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  // 항목 생성
  const createTodos = () => {
    AxiosUtils.post("/todos", { title: title, content: content }).then(
      (res) => {
        props.getTodos();
        ModalUtils.closeModal();
      }
    );
  };

  return (
    <Wrapper>
      <TitleInput
        ref={titleRef}
        name="title"
        placeholder="title"
        value={title}
        onChange={handleInputs}
      ></TitleInput>

      <ContentInput
        name="content"
        placeholder="content"
        value={content}
        onChange={handleInputs}
      ></ContentInput>

      <ButtonWrapper>
        <MediumButton disabled={disableButton} onClick={createTodos}>
          추가
        </MediumButton>
      </ButtonWrapper>
    </Wrapper>
  );
}

export default TodoInput;

const Wrapper = styled.div`
  display: grid;
  gap: 16px;
  padding: 20px 30px;
`;
const TitleInput = styled.input``;
const ContentInput = styled.textarea``;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
