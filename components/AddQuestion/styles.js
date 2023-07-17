import styled from 'styled-components';

export const AddQuestionContainer = styled.div`
  margin-top: 20px;
`;

export const AddQuestionButton = styled.button`
  background-color: #fff;
  border: 2px solid #000;
  height: 100px;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f0f0f0;
  }

  svg {
    width: 50px;
    height: 50px;
  }
`;

export const AddQuestionForm = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  input {
    padding: 8px;
    border: 2px solid #000;
    border-radius: 4px;
  }

  div {
    display: flex;
    gap: 10px;
  }

  svg {
    cursor: pointer;
  }
`;
