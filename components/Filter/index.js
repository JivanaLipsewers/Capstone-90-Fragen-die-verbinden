import { useState } from 'react';
import { FilterContainer, FilterLabel, FilterCheckbox, CategoryList } from "./styles";

const Filter = ({ categories, selectedCategories, onCategoryChange }) => {
  const [showCategories, setShowCategories] = useState(false);

  const handleToggleCategories = () => {
    setShowCategories(!showCategories);
  };

  return (
    <FilterContainer>
      <h3 onClick={handleToggleCategories}>Kategorie auswählen</h3>
      {showCategories && (
        <CategoryList>
          {categories.map((category, index) => (
            <FilterLabel key={index}>
              <FilterCheckbox
                type="checkbox"
                checked={selectedCategories.includes(category)}
                onChange={() => onCategoryChange(category)}
              />
              {category}
            </FilterLabel>
          ))}
        </CategoryList>
      )}
    </FilterContainer>
  );
};

export default Filter;
