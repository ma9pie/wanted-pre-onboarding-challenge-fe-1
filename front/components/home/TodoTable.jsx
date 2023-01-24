import TextButton from "@/components/common/Buttons/TextButton";
import CheckBox from "@/components/common/CheckBox";
import TodoInput from "@/components/home/TodoInput";
import EditSvg from "@/svg/EditSvg";
import PlusSvg from "@/svg/PlusSvg";
import TrashCanSvg from "@/svg/TrashCanSvg";
import AxiosUtils from "@/utils/AxiosUtils";
import ModalUtils from "@/utils/ModalUtils";
import styled from "@emotion/styled";
import React, { useEffect, useState, useRef } from "react";

function TodoTable() {
  const ref = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const [checkAll, setCheckAll] = useState(false);
  const [todoList, setTodoList] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    getTodos();
  }, []);

  // 항목 조회
  const getTodos = () => {
    AxiosUtils.get("/todos").then((res) => {
      setTodoList(res.data.data);
    });
  };

  // 항목 전체 체크
  const handleCheckAll = (checked) => {
    setCheckAll(checked);
    const tmpTodoList = [].concat(todoList);
    tmpTodoList.map((item) => (item.checked = checked));
    setTodoList(tmpTodoList);
  };

  // 항목 체크
  const handleCheck = (id) => {
    const tmpTodoList = [].concat(todoList);
    const todo = tmpTodoList.find((item) => item.id === id);
    if (todo) {
      todo.checked = todo.checked ? false : true;
      setTodoList(tmpTodoList);
      setCheckAll(tmpTodoList.every((item) => item.checked));
    }
  };

  // 수정 버튼
  const handleEdit = (id) => {
    const tmpTodoList = [].concat(todoList);
    tmpTodoList.map((item) => {
      if (item.id === id) {
        item.edit = true;
        setTitle(item.title);
        setContent(item.content);
      } else {
        item.edit = false;
      }
      return item;
    });
    setTodoList(tmpTodoList);
  };

  // 항목 수정
  const updateTodos = (id) => {
    AxiosUtils.put(`/todos/${id}`, { title: title, content: content }).then(
      (res) => {
        ModalUtils.openToastPopup({
          type: "success",
          message: "항목을 수정하였습니다.",
        });
        getTodos();
      }
    );
  };

  // 항목 삭제
  const deleteTodos = (id) => {
    ModalUtils.openConfirm({
      message: "해당 항목을 삭제하시겠습니까?",
      onRequestConfirm: () =>
        AxiosUtils.delete(`/todos/${id}`).then((res) => {
          ModalUtils.openToastPopup({
            type: "success",
            message: "항목을 삭제하였습니다.",
          });
          getTodos();
        }),
    });
  };

  // 선택 목록 삭제
  const deleteSelected = () => {
    if (todoList.every((item) => !item.checked)) {
      return ModalUtils.openAlert({
        message: "항목을 선택해주세요.",
      });
    }
    ModalUtils.openConfirm({
      message: "선택된 목록을 삭제하시겠습니까?",
      onRequestConfirm: () => {
        Promise.all(
          todoList.map((item) => {
            if (item.checked) {
              AxiosUtils.delete(`/todos/${item.id}`);
            }
          })
        ).then(() => {
          ModalUtils.openToastPopup({
            type: "success",
            message: "선택된 항목을 삭제하였습니다.",
          });
          getTodos();
        });
      },
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
          <Column></Column>
          <Column>
            <IconWrapper>
              <TextButton onClick={deleteSelected}>선택 삭제</TextButton>
            </IconWrapper>
          </Column>
        </FieldRow>

        {/* Add Todo */}
        <Row>
          <AddTodoBox
            onClick={() =>
              ModalUtils.openModal({
                component: () => <TodoInput getTodos={getTodos}></TodoInput>,
              })
            }
          >
            <PlusSvg width="32px" height="32px" color="var(--sub)"></PlusSvg>
            <SubText>Add Todos</SubText>
          </AddTodoBox>
        </Row>

        {/*  테이블 목록 */}
        {todoList.map((item) => (
          <Row key={item.id} ref={item.edit ? ref : null}>
            <Column>
              <IconWrapper>
                <CheckBox
                  checked={item.checked}
                  onClick={() => handleCheck(item.id)}
                ></CheckBox>
              </IconWrapper>
            </Column>
            <Column>
              {item.edit ? (
                <Input
                  ref={titleRef}
                  name="title"
                  placeholder="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                ></Input>
              ) : (
                <Text>{item.title}</Text>
              )}
            </Column>
            <Column>
              {item.edit ? (
                <Input
                  ref={contentRef}
                  name="content"
                  placeholder="content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                ></Input>
              ) : (
                <Text>{item.content}</Text>
              )}
            </Column>
            <Column>
              {item.edit ? (
                <TextBox>
                  <EditText onClick={() => updateTodos(item.id)}>수정</EditText>
                  <EditText onClick={() => handleEdit()}>취소</EditText>
                </TextBox>
              ) : (
                <IconWrapper>
                  <EditSvg
                    width="32px"
                    height="32px"
                    onClick={() => handleEdit(item.id)}
                  ></EditSvg>
                </IconWrapper>
              )}
            </Column>
            <Column>
              <IconWrapper>
                <TrashCanSvg onClick={() => deleteTodos(item.id)}></TrashCanSvg>
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
    padding: 0px 16px;
  }
  &:nth-of-type(3) {
    flex: 10;
    padding: 0px 16px;
  }
  &:nth-of-type(4) {
    width: 80px;
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
  height: 100%;
  display: flex;
  align-items: center;
  margin-left: 24px;
  cursor: pointer;
  & * {
    color: var(--sub);
    &:hover {
      color: var(--blue400);
    }
  }
`;
const Text = styled.p`
  font: var(--body16);
  border: 1px solid transparent;
`;
const SubText = styled.p`
  font: var(--body16);
  color: var(--sub);
`;
const Input = styled.input`
  border: 1px solid var(--sectionLine);
`;
const TextBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;
const EditText = styled.p`
  font: var(--body16);
  color: var(--sub);
  text-decoration: underline;
  text-underline-position: under;
  cursor: pointer;
`;
