import { useState } from 'react';
import { AddQuestionContainer, AddQuestionButton, AddQuestionForm } from './styles';

const AddQuestion = ({ onAddQuestion }) => {
  const [isAddingQuestion, setIsAddingQuestion] = useState(false);
  const [category, setCategory] = useState('');
  const [question, setQuestion] = useState('');

  const handleAddQuestionClick = () => {
    setIsAddingQuestion(true);
  };

  const handleCancelClick = () => {
    setIsAddingQuestion(false);
    setCategory('');
    setQuestion('');
  };

  const handleSaveClick = () => {
    if (category && question) {
      onAddQuestion({ category, question });
      setIsAddingQuestion(false);
      setCategory('');
      setQuestion('');
    }
  };

  return (
    <AddQuestionContainer>
      {!isAddingQuestion ? (
        <AddQuestionButton onClick={handleAddQuestionClick}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32">
            <title>plus</title>
            <path d="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
          </svg>
        </AddQuestionButton>
      ) : (
        <AddQuestionForm>
          <input
            type="text"
            placeholder="Kategorie hinzufügen"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <input
            type="text"
            placeholder="Frage"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
          <div>
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              onClick={handleCancelClick}
            >
              <title>close</title>
              <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
            </svg>
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              onClick={handleSaveClick}
            >
              <title>check</title>
              <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
            </svg>
          </div>
        </AddQuestionForm>
      )}
    </AddQuestionContainer>
  );
};

export default AddQuestion;
