import { QuestionContainer, Category, QuestionText, Separator } from "./styles";

const Question = ({ category, question, onPrevQuestion, onNextQuestion }) => {
  return (
    <QuestionContainer>
      <Category>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="32"
          height="32"
          style={{ verticalAlign: 'middle', marginRight: '64px' }}
          onClick={onPrevQuestion} // Event-Handler für Chevron-left
        >
          <title>chevron-left</title>
          <path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" />
        </svg>
        {category}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="32"
          height="32"
          style={{ verticalAlign: 'middle', marginLeft: '64px' }}
          onClick={onNextQuestion} // Event-Handler für Chevron-right
        >
          <title>chevron-right</title>
          <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
        </svg>
      </Category>
      <Separator />
      <QuestionText>{question}</QuestionText>
    </QuestionContainer>
  );
};

export default Question;
