import styled from "styled-components";

export const Form = styled.form`
  background-color: #fffde5;
  margin-left: 20px;
  padding: 0 10px 10px 10px;
  margin-bottom: 20px;
  border-radius: 5%;
`;
export const Fieldset = styled.fieldset`
  border: none;
`;
export const SubmitButton = styled.button`
  color: #fff;
  /* font-size: 1.1em; */
  border: 0;
  padding: 10px 30px;
  cursor: pointer;
  background-color: #000;
  margin: 20px auto 20px;
  box-shadow: 1px 1px 1px 1px rgb(204 203 203);
  display: flex;
  justify-content: center;
  align-self: center;

  &:hover {
    background-color: #fffde5;
    color: black;
  }
`;
export const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid rgb(204 203 203);
  box-shadow: 1px 1px 1px 1px rgb(204 203 203);
  width: 100%;
`;
export const Textarea = styled.textarea`
  padding: 10px;
  font-size: 16px;
  border: 1px solid rgb(204 203 203);
  box-shadow: 1px 1px 1px 1px rgb(204 203 203);
  width: 100%;
  font-family: system-ui;
`;
export const Select = styled.select`
  padding: 10px;
  font-size: 16px;
  border: 1px solid rgb(204 203 203);
  box-shadow: 1px 1px 1px 1px rgb(204 203 203);
  margin-left: 30px;
`;
