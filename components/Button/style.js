import styled from 'styled-components';

export const ButtonContainer = styled.div`
  position: fixed;
  bottom: 40px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  z-index: 9999;
`;

export const Button = styled.button`
  background-color: #fff;
  border: 2px solid #000;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(33.33% - 20px);
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
