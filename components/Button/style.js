import styled from 'styled-components';

export const ButtonContainer = styled.div`
  position: fixed;
  bottom: 20px;
  left: 0;
  display: flex;
  justify-content: space-between;
  width: 100vw;
  padding: 0 20px;
`;

export const Button = styled.button`
  flex: 1;
  background-color: #FFF;
  border: 2px solid #000;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.span`
  font-size: 16px;
  color: #000;
`;
