import { useState } from 'react';
import { FilterContainer, FilterHeader, FilterLabel, FilterCheckbox, SelectedCategoriesContainer, SelectedCategory, CloseIcon, ChevronIcon } from './styles';

const Filter = ({ categories, selectedCategories, onCategoryChange }) => {
  const [showCategories, setShowCategories] = useState(false);

  const handleToggleCategories = () => {
    setShowCategories(!showCategories);
  };

  const handleCategoryChange = (category) => {
    onCategoryChange(category);
  };

  const handleRemoveCategory = (category) => {
    const updatedCategories = selectedCategories.filter((c) => c !== category);
    onCategoryChange(updatedCategories);
  };

  return (
    <FilterContainer>
      <FilterHeader onClick={handleToggleCategories}>
        Kategorie auswählen
        <ChevronIcon>
          {showCategories ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32">
              <title>chevron-up</title>
              <path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32">
              <title>chevron-down</title>
              <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
            </svg>
          )}
        </ChevronIcon>
      </FilterHeader>
      <SelectedCategoriesContainer>
        {selectedCategories.map((category, index) => (
          <SelectedCategory key={index}>
            {category}
            <CloseIcon onClick={() => handleRemoveCategory(category)}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <title>close</title>
                <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
              </svg>
            </CloseIcon>
          </SelectedCategory>
        ))}
      </SelectedCategoriesContainer>
      {showCategories && (
        <div>
          {categories.map((category, index) => (
            <FilterLabel key={index}>
              <FilterCheckbox
                type="checkbox"
                checked={selectedCategories.includes(category)}
                onChange={() => handleCategoryChange(category)}
              />
              {category}
            </FilterLabel>
          ))}
        </div>
      )}
    </FilterContainer>
  );
};

export default Filter;
