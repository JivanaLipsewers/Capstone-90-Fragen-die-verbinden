import { useState } from "react";
import { ButtonContainer, PlusButton } from "../Navigation/styles";
import {
  Form,
  Fieldset,
  SubmitButton,
  Input,
  Select,
} from "../AddQuestion/styles";

export function AddQuestionButton({ isAdded, onToggleAdd }) {
  return (
    <ButtonContainer>
      <PlusButton onClick={onToggleAdd} isAdded={isAdded}>
        {isAdded ? (
          <svg viewBox="0 0 24 24" width="48" height="48">
            <title>plus</title>
            <path d="M17,13H13V17H11V13H7V11H11V7H13V11H17M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" width="48" height="48">
            <title>plus-outline</title>
            <path d="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M13,7H11V11H7V13H11V17H13V13H17V11H13V7Z" />
          </svg>
        )}
      </PlusButton>
    </ButtonContainer>
  );
}
/////////////////

export default function AddQuestion({ onCloseForm, onAddQuestion }) {
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    onAddQuestion(data);

    event.target.reset();
    alert("You have successfully submitted your project!");
    onCloseForm();
  };

  function openSelectOptions() {
    setIsSelectOpen(true);
  }
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Fieldset>
          <label htmlFor="category_form" onClick={openSelectOptions}>
            Select a category:{" "}
          </label>
          <Select name="category" id="category_form" required={isSelectOpen}>
            <option value="Über dich">Über dich</option>
            <option value="Über mich">Über mich</option>
            <option value="Über uns">Über uns</option>
          </Select>
          <label htmlFor="title">
            <p>Frage</p>
            <Input
              name="title"
              type="text"
              minLength="5"
              maxLength="20"
              id="title"
              required
              placeholder="Enter a question"
            />
          </label>
        </Fieldset>
        <SubmitButton type="submit">Submit your questions</SubmitButton>
      </Form>
    </div>
  );
}
