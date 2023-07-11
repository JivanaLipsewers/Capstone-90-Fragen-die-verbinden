import React from 'react';
import { ButtonContainer, Button, ButtonText } from './style';

const Buttons = () => {
  return (
    <ButtonContainer>
      <Button>
        <ButtonText>New Question</ButtonText>
      </Button>
      <Button>
        <ButtonText>Favoriten</ButtonText>
      </Button>
      <Button>
        <ButtonText>Notizen</ButtonText>
      </Button>
    </ButtonContainer>
  );
};

export default Buttons;
