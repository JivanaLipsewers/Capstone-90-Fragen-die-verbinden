import styled from "styled-components";

export const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 160px;
  margin-bottom: 160px;
`;

export const QuestionContent = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
`;

export const ChevronButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

export const QuestionText = styled.p`
  margin-top: 16px;
`;

// import styled from "styled-components";

// export const QuestionContainer = styled.div`
//   margin-bottom: 60px;
//   text-align: center;
// `;

// export const Category = styled.h2`
//   // Styles für die Kategorie später hier
// `;

// export const QuestionText = styled.p`
//   // Styles für die Fragen später hier
// `;

// export const Separator = styled.hr`
//   width: 50%;
//   margin: auto;
// `;
