import styled from 'styled-components';

export const FilterContainer = styled.div`
  background-color: #FFF;
  border: 2px solid #000;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
`;

export const FilterHeader = styled.h3`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  cursor: pointer;
  margin-bottom: 16px;
`;

export const ChevronIcon = styled.span`
  width: 32px;
  height: 32px;
  margin-left: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SelectedCategoriesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;
`;

export const SelectedCategory = styled.div`
  background-color: #FFF;
  border: 1px solid #000;
  border-radius: 5px;
  padding: 5px 10px;
  display: flex;
  align-items: center;
  margin-right: 5px;
  margin-bottom: 5px;
`;

export const CloseIcon = styled.span`
  margin-left: 5px;
  cursor: pointer;
`;

export const FilterLabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

export const FilterCheckbox = styled.input`
  margin-right: 5px;
`;
