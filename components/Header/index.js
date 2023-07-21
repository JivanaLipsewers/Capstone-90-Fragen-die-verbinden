import { HeaderContainer } from "./styles";
//import Filter from "../Filter/index.js";

const Header = ({ categories, selectedCategories, onCategoryChange }) => {
  return (
    <HeaderContainer>
      <h1>Quiz-App</h1>
    </HeaderContainer>
  );
};

export default Header;

{
  /* <Filter
  categories={categories}
  selectedCategories={selectedCategories}
  onCategoryChange={onCategoryChange}
/>; */
}
