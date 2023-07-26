import { ButtonContainer, PlusButton } from "../Navigation/styles";
import {
  Form,
  Fieldset,
  SubmitButton,
  Input,
  Textarea,
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

export default function ProjectForm({ onAddProject, onCloseForm }) {
  const [imageFile, setImageFile] = useState(null);
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    if (imageFile) {
      const reader = new FileReader();
      reader.onload = () => {
        data.imageSource = reader.result;
        onAddProject(data);
      };
      reader.readAsDataURL(imageFile);
    } else {
      data.imageSource = "/placeholder-image.jpg";
      onAddProject(data);
    }
    event.target.reset();
    alert("You have successfully submitted your project!");
    onCloseForm();
  };
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImageFile(file);
  };

  function openSelectOptions() {
    setIsSelectOpen(true);
  }
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Fieldset>
          <label htmlFor="title">
            <p>Title: </p>
            <Input
              name="title"
              type="text"
              minLength="5"
              maxLength="20"
              id="title"
              required
              placeholder="Enter your project title"
            />
          </label>
          {/* <label htmlFor="imageSource">
            <p>Image: </p>
            <input
              type="file"
              name="imageSource"
              id="imageSource"
              accept="image/*"
              onChange={handleImageChange}
            />
          </label> */}
          <label htmlFor="shortDescription">
            <p>Short description: </p>
            <Textarea
              name="shortDescription"
              id="shortDescription"
              minLength="30"
              maxLength="100"
              required
              placeholder="Enter a short description. Max. 100 characters."
            />
          </label>
          <label htmlFor="longDescription">
            <p>Long description: </p>
            <Textarea
              name="longDescription"
              id="longDescription"
              minLength="50"
              maxLength="200"
              required
              placeholder="Enter a long description. Max. 200 characters."
            />
          </label>
          <br />
          <br />
          <label htmlFor="category_form" onClick={openSelectOptions}>
            Select a category:{" "}
          </label>
          <Select name="category" id="category_form" required={isSelectOpen}>
            <option value="Community">Community</option>
            <option value="Environment">Environment</option>
            <option value="Politics">Politics</option>
          </Select>
          <label htmlFor="organizer">
            <p>Organizer:</p>
            <Input
              type="text"
              name="organizer"
              id="organizer"
              required
              placeholder="Enter your organization"
            />
          </label>
          <label htmlFor="contact">
            <p>Contact email: </p>
            <Input
              name="contact"
              id="contact"
              type="email"
              required
              placeholder="Enter your email-address"
            />
          </label>
        </Fieldset>
        <SubmitButton type="submit">Submit your project</SubmitButton>
      </Form>
    </div>
  );
}
