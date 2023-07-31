import { useState } from "react";
import { HeaderContainer } from "./styles";
import Filter from "../Filter/index.js";

const Header = ({ categories, selectedCategories, onCategoryChange }) => {
  const [filterSelectedCategories, setFilterSelectedCategories] = useState([]);

  return (
    <HeaderContainer>
      <h1>Fragen, die verbinden.</h1>
    </HeaderContainer>
  );
};

export default Header;

// categories={categories}
//         selectedCategories={selectedCategories}
//         onCategoryChange={onCategoryChange}
