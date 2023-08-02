import styled from "styled-components";

export const ButtonContainer = styled.nav`
  display: flex;
  justify-content: center;

  gap: 4%;
`;

export const ButtonBox = styled.div`
  width: 50%;
  /* display: flex;
  flex-direction: column;
  align-items: center; */
  /* display: grid;
  grid-template-columns: repeat() (auto-fit, minmax() (200px, 1fr));
  grid-gap: 1rem; */
`;

export const PlusButton = styled.button`
  background-color: #000;
  height: 80px;
  border: 2px solid #000;
  width: 100%;

  &:hover {
    background-color: #fff053;
  }
`;

export const HeartButton = styled.button`
  background-color: #000;
  height: 80px;
  border: 2px solid #000;
  width: 100%;

  &:hover {
    background-color: #fff053;
  }
`;
