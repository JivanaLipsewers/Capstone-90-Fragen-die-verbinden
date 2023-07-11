import styled from 'styled-components';

export const FilterContainer = styled.div`
  background-color: #FFF;
  border: 2px solid #000; /* Schwarzer Rand */
  position: fixed;
  display: flex;
  color: #000;
  padding: 20px;
  margin-top: 120px;
  flex-direction: column;
  width: 100vw;
  cursor: pointer;
`;

export const CategoryList = styled.div`
  margin-top: 10px;
`;

export const FilterLabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

export const FilterCheckbox = styled.input`
  margin-right: 5px;
`;