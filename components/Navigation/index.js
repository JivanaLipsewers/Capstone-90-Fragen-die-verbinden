import { AddQuestionButton } from "../AddQuestion/index.js";
import { FavoriteButton } from "../FavoriteButton/index.js";
import { ButtonBox, ButtonContainer, PlusButton } from "../Navigation/styles";

export default function Navigation({
  currentQuestion,
  questions,
  setQuestions,
  // setCurrentQuestionIndex,
  handleShowForm,
}) {
  // const handleToggleAdd = () => {
  //   const updatedQuestions = questions.map((question) =>
  //     question.id === currentQuestion.id
  //       ? { ...question, isAdded: !question.isAdded }
  //       : question
  //   );
  //   setQuestions(updatedQuestions);
  // };

  const handleToggleFavorite = () => {
    const updatedQuestions = questions.map((question) =>
      question.id === currentQuestion.id
        ? { ...question, isFavorite: !question.isFavorite }
        : question
    );
    setQuestions(updatedQuestions);
  };

  // const handlePrevQuestion = () => {
  //   const newIndex = currentQuestionIndex - 1;
  //   if (newIndex >= 0) {
  //     setCurrentQuestionIndex(newIndex);
  //   }
  // };

  // const handleNextQuestion = () => {
  //   const newIndex = currentQuestionIndex + 1;
  //   if (newIndex < questions.length) {
  //     setCurrentQuestionIndex(newIndex);
  //   }
  // };

  return (
    <ButtonContainer>
      <ButtonBox>
        <AddQuestionButton
          // isAdded={currentQuestion.isAdded}
          // onToggleAdd={handleToggleAdd}
          onClick={handleShowForm}
        />
      </ButtonBox>
      <ButtonBox>
        <FavoriteButton
          isFavorite={currentQuestion.isFavorite}
          onToggleFavorite={handleToggleFavorite}
        />
      </ButtonBox>
    </ButtonContainer>
  );
}

{
  /* <StyledButton onClick={handleShowForm}>+ ADD PROJECT</StyledButton>
{showForm && (
  <ProjectForm
    onAddProject={handleAddProject}
    onCloseForm={handleCloseForm}
  /> */
}
