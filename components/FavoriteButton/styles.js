import styled from "styled-components";

export const ButtonContainer = styled.div`
  position: fixed;
  bottom: 40px;
  left: 40px;
  right: 40px;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  z-index: 9999;
`;

export const Button = styled.button`
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const HeartButton = styled(Button)`
  background-color: #fff;
  height: 100px;
  border: 2px solid #000;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: yellow; /* Gelbe Hoverfarbe */
  }

  svg {
    width: 50px;
    height: 50px;
  }
`;

export const HeartButtonHover = styled(Button)`
  background-color: #f0f0f0;

  svg {
    width: 50px;
    height: 50px;
  }
`;
