import { Filter } from "$/types";
import React, { FC } from "react";
import styled from "styled-components";

interface Props {
  filter: Filter;
  setFilter: (filter: Filter) => void;
}

const Wrapper = styled.div`
  display: flex;
  gap: 1rem;
`;
const Button = styled.button<{ selected: boolean }>`
  background: transparent;
  border: none;
  color: ${(props) =>
    props.selected
      ? props.theme.text.filter.active
      : props.theme.text.filter.default};
  font-weight: ${(props) => props.theme.font.weight.bold};
  cursor: pointer;
  transition: 200ms ease;

  &:hover {
    color: ${(props) => !props.selected && props.theme.text.filter.hover};
  }
`;

const FilterTodos: FC<Props> = ({ filter, setFilter }) => {
  return (
    <Wrapper>
      {(["all", "active", "completed"] as Filter[]).map((f, idx) => (
        <Button selected={f === filter} onClick={() => setFilter(f)} key={idx}>
          {f.slice(0, 1).toUpperCase() + f.slice(1)}
        </Button>
      ))}
    </Wrapper>
  );
};

export default FilterTodos;
