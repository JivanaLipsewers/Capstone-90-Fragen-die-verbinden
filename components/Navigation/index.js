import { AddQuestionButton } from "../AddQuestion/index.js";
import { FavoriteButton } from "../FavoriteButton/index.js";
import { ButtonBox, ButtonContainer, PlusButton } from "../Navigation/styles";

export default function Navigation({
  currentQuestion,
  questions,
  setQuestions,

  handleShowForm,
}) {
  const handleToggleFavorite = () => {
    const updatedQuestions = questions.map((question) =>
      question.id === currentQuestion.id
        ? { ...question, isFavorite: !question.isFavorite }
        : question
    );
    setQuestions(updatedQuestions);
  };

  return (
    <ButtonContainer>
      <ButtonBox>
        {/* <AddQuestionButton
          // isAdded={currentQuestion.isAdded}
          // onToggleAdd={handleToggleAdd}
          onClick={handleShowForm}
        /> */}
        <PlusButton onClick={handleShowForm}>
          {/* {isAdded ? (
            <svg viewBox="0 0 24 24" width="48" height="48">
              <title>plus</title>
              <path d="M17,13H13V17H11V13H7V11H11V7H13V11H17M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
            </svg>
          ) : ( */}
          <svg viewBox="0 0 24 24" width="48" height="48">
            <title>plus-outline</title>
            <path d="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M13,7H11V11H7V13H11V17H13V13H17V11H13V7Z" />
          </svg>
          {/* )} */}
        </PlusButton>
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
