import {
  QuestionContainer,
  QuestionContent,
  ChevronButton,
  QuestionText,
} from "./styles";

export function Question({ question, onPrevQuestion, onNextQuestion }) {
  return (
    <QuestionContainer>
      <QuestionContent>
        <ChevronButton onClick={onPrevQuestion}>
          <svg viewBox="0 0 24 24" width="32" height="32">
            <title>chevron-left</title>
            <path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" />
          </svg>
        </ChevronButton>
        <h2>{question.category}</h2>
        <ChevronButton onClick={onNextQuestion}>
          <svg viewBox="0 0 24 24" width="32" height="32">
            <title>chevron-right</title>
            <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
          </svg>
        </ChevronButton>
      </QuestionContent>
      <QuestionText>{question.question}</QuestionText>
    </QuestionContainer>
  );
}

// import React from "react";
// import { QuestionContainer, Category, QuestionText, Separator } from "./styles";
// import FavoriteButton from "../FavoriteButton/index.js";
// import { Button } from "../Button/style";

// const Question = ({
//   category,
//   question,
//   id,
//   favorite,
//   onPrevQuestion,
//   onNextQuestion,
//   onToggleFavorite,
// }) => {

//   return (
//     <QuestionContainer>
//       <div style={{ display: "flex", width: "100%" }}>
//         <Button onClick={onPrevQuestion}>
// <svg
//   xmlns="http://www.w3.org/2000/svg"
//   viewBox="0 0 24 24"
//   width="32"
//   height="32"
// >
//   <title>chevron-left</title>
//   <path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" />
// </svg>
//         </Button>
//         <Category>{category}</Category>
//         <Button onClick={onNextQuestion}>
// <svg
//   xmlns="http://www.w3.org/2000/svg"
//   viewBox="0 0 24 24"
//   width="32"
//   height="32"
// >
//   <title>chevron-right</title>
//   <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
// </svg>
//         </Button>
//       </div>

//       <Separator />
//       <QuestionText>{question}</QuestionText>
//     </QuestionContainer>
//   );
// };

// export default Question;
