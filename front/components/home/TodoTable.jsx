import TextButton from "@/components/common/Buttons/TextButton";
import CheckBox from "@/components/common/CheckBox";
import TodoInput from "@/components/home/TodoInput";
import EditSvg from "@/svg/EditSvg";
import PlusSvg from "@/svg/PlusSvg";
import TrashCanSvg from "@/svg/TrashCanSvg";
import AxiosUtils from "@/utils/AxiosUtils";
import ModalUtils from "@/utils/ModalUtils";
import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";

function TodoTable() {
  const [checkAll, setCheckAll] = useState(false);
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    AxiosUtils.get("/todos").then((res) => {
      setTodoList(res.data.data);
    });
  }, []);
  // useEffect(() => {
  //   AxiosUtils.post("/todos", { title: "test", content: "testtest" });
  // }, []);

  const addTodo = () => {
    ModalUtils.openModal({
      component: () => <TodoInput></TodoInput>,
    });
  };

  const handleCheckAll = (checked) => {
    setCheckAll(checked);
  };

  const deleteAll = () => {
    ModalUtils.openConfirm({
      message: "목록 전체를 삭제하시겠습니까?",
    });
  };

  return (
    <Wrapper>
      <Table>
        {/* 필드 */}
        <FieldRow>
          <Column>
            <IconWrapper>
              <CheckBox
                checked={checkAll}
                onClick={(checked) => handleCheckAll(checked)}
              ></CheckBox>
            </IconWrapper>
          </Column>
          <Column>목록</Column>
          <Column>상세</Column>
          <Column>수정</Column>
          <Column>
            <IconWrapper>
              <TextButton onClick={deleteAll}>전체 삭제</TextButton>
            </IconWrapper>
          </Column>
        </FieldRow>

        {/* Add Todo */}
        <Row>
          <AddTodoBox onClick={addTodo}>
            <PlusSvg width="32px" height="32px" color="var(--sub)"></PlusSvg>
            <SubText>Add Todos</SubText>
          </AddTodoBox>
        </Row>

        {/*  테이블 목록 */}
        {todoList.map((item) => (
          <Row key={item.id}>
            <Column>
              <IconWrapper>
                <CheckBox></CheckBox>
              </IconWrapper>
            </Column>
            <Column>
              <Text>{item.title}</Text>
            </Column>
            <Column>
              <Text>{item.content}</Text>
            </Column>
            <Column>
              <IconWrapper>
                <EditSvg width="32px" height="32px"></EditSvg>
              </IconWrapper>
            </Column>
            <Column>
              <IconWrapper>
                <TrashCanSvg></TrashCanSvg>
              </IconWrapper>
            </Column>
          </Row>
        ))}
      </Table>
    </Wrapper>
  );
}

export default TodoTable;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 100px;
`;
const Table = styled.div`
  min-width: 280px;
  max-width: 1080px;
  width: 100%;
  margin: 0px 40px;
  border: 1px solid var(--sectionLine);
`;
const FieldRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  background-color: var(--textBox);
  & * {
    background-color: inherit;
  }
`;
const Row = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  &:nth-of-type(1) {
    width: 80px;
  }
  &:nth-of-type(2) {
    flex: 10;
    margin-left: 16px;
  }
  &:nth-of-type(3) {
    flex: 10;
    margin-left: 16px;
  }
  &:nth-of-type(4) {
    width: 40px;
    text-align: center;
  }
  &:nth-of-type(5) {
    width: 80px;
  }
`;
const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const AddTodoBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  margin-left: 24px;
  color: var(--sub);
  cursor: pointer;
  &:hover {
    color: var(--blue400);
  }
  & * {
    color: inherit;
  }
`;
const Text = styled.p`
  font: var(--body16);
`;
const SubText = styled.p`
  font: var(--body16);
  color: var(--sub);
`;
