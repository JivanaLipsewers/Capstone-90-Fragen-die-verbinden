import { HeaderContainer } from "./styles";
import Filter from '../Filter/index.js';

const Header = ({ categories, selectedCategories, onCategoryChange }) => {
  return (
    <HeaderContainer>
     <h1>Quiz-App</h1>
      <Filter categories={categories} selectedCategories={selectedCategories} onCategoryChange={onCategoryChange} />
   </HeaderContainer>
  );
};

export default Header;
