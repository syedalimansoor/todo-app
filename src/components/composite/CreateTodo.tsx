import React, {
  ChangeEventHandler,
  MouseEventHandler,
  KeyboardEventHandler,
  useState,
} from "react";
import { useDispatch } from "react-redux";
import { add } from "$/slices/todosSlice";
import RemoveTodo from "$/components/atomic/RemoveTodo";
import TodoStatus from "$/components/atomic/TodoStatus";
import TodoText from "$/components/atomic/TodoText";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: stretch;
  background-color: ${(props) => props.theme.background.todo};
  border-radius: 0.2rem;
`;

const CreateTodo = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const addTodo = () => {
    dispatch(add({ text }));
    setText("");
  };

  const handleTextChange: ChangeEventHandler<HTMLTextAreaElement> = (evt) => {
    setText(evt.target.value);
  };

  const handleClearText: MouseEventHandler<HTMLButtonElement> = () => {
    setText("");
  };

  const handleKeyPress: KeyboardEventHandler<HTMLTextAreaElement> = (evt) => {
    if (evt.key === "Enter" && !evt.shiftKey) {
      evt.preventDefault();
      evt.stopPropagation();
      addTodo();
    }
  };

  return (
    <Wrapper>
      <TodoStatus />
      <TodoText
        text={text}
        onChange={handleTextChange}
        onKeyPress={handleKeyPress}
      />
      <RemoveTodo show={!!text} onClick={handleClearText} />
    </Wrapper>
  );
};

export default CreateTodo;
