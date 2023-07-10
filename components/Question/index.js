import { QuestionContainer, Category, QuestionText, Separator } from "./styles";

const Question = ({ category, question }) => {
  return (
    <QuestionContainer>
      <Category>{category}</Category>
      <Separator />
      <QuestionText>{question}</QuestionText>
    </QuestionContainer>
  );
};

export default Question;
