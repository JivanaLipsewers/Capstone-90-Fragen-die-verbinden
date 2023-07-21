import { StrictMode } from "react";
const IndexPage = () => {
  return <div></div>;
};

export default IndexPage;

// import { createRoot } from "react-dom/client";
// import App from "./_app";

// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);

// root.render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );

// import { useState } from "react";
// import Header from "../components/Header/index.js";
// import Question from "../components/Question/index.js";
// import AddQuestion from "../components/AddQuestion/index.js";
// import Button from "../components/Button/index.js";
// import { QuestionContainer } from "../components/Question/styles.js";

// const questions = [
//   {
//     category: "Über dich",
//     question: "In welchen Momenten bist du am glücklichsten?",
//     id: "1",
//     favorite: false,
//   },
//   {
//     category: "Über dich",
//     question: "Welchen Stellenwert hat Familie in deinem Leben?",
//     id: "2",
//     favorite: false,
//   },
//   {
//     category: "Über dich",
//     question: "Was schätzt du am meisten an dir?",
//     id: "3",
//     favorite: false,
//   },
//   {
//     category: "Über dich",
//     question: "Welchen Wunsch möchtest du dir bald erfüllen?",
//     id: "4",
//     favorite: false,
//   },
//   {
//     category: "Über dich",
//     question: "Welche Entscheidung würdest du heute anders fällen?",
//     id: "5",
//     favorite: false,
//   },

//   {
//     category: "Über mich",
//     question: "Was nervt dich an mir?",
//     id: "6",
//     favorite: false,
//   },
//   {
//     category: "Über mich",
//     question: "Welche meiner Entscheidungen bewunderst du?",
//     id: "7",
//     favorite: false,
//   },
//   {
//     category: "Über mich",
//     question: "Was, denkst du, würde mir gut tun?",
//     id: "8",
//     favorite: false,
//   },
//   {
//     category: "Über mich",
//     question: "Was schätzt du am meisten an mir?",
//     id: "9",
//     favorite: false,
//   },
//   {
//     category: "Über mich",
//     question: "Welchen Eindruck mache ich zurzeit auf dich?",
//     id: "10",
//     favorite: false,
//   },

//   {
//     category: "Über uns",
//     question:
//       "Welche gemeinsamen Erlebnisse sind dir besonders in Erinnerung geblieben?",
//     id: "11",
//     favorite: false,
//   },
//   {
//     category: "Über uns",
//     question: "Worüber sprichst du gerne mit mir?",
//     id: "12",
//     favorite: false,
//   },
//   {
//     category: "Über uns",
//     question: "Gibt es etwas, worum du mich beneidest?",
//     id: "13",
//     favorite: false,
//   },
//   {
//     category: "Über uns",
//     question: "Welche Rolle spiele ich in deinem Leben?",
//     id: "14",
//     favorite: false,
//   },
//   {
//     category: "Über uns",
//     question: "Inwiefern bereichere ich dein Leben?",
//     id: "15",
//     favorite: false,
//   },
//   // Weitere später Fragen hier
// ];

// const categories = [
//   "Über dich",
//   "Über mich",
//   "Über uns",
//   "New Questions",
//   "Favoriten",
//   "Notizen",
// ];

// const IndexPage = () => {
//   const [selectedCategories, setSelectedCategories] = useState(categories);
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [userQuestions, setUserQuestions] = useState([]);
//   const [isAddingQuestion, setIsAddingQuestion] = useState(false);

//   const handleCategoryChange = (category) => {
//     if (selectedCategories.includes(category)) {
//       setSelectedCategories(selectedCategories.filter((c) => c !== category));
//     } else {
//       setSelectedCategories([...selectedCategories, category]);
//     }
//   };

//   const handleAddQuestion = (newQuestion) => {
//     setUserQuestions([
//       ...userQuestions,
//       { ...newQuestion, id: String(userQuestions.length + 1) },
//     ]);
//   };

//   const filteredQuestions =
//     selectedCategories.length > 0
//       ? [...questions, ...userQuestions].filter((question) =>
//           selectedCategories.includes(question.category)
//         )
//       : [...questions, ...userQuestions];

//   const handlePrevQuestion = () => {
//     setCurrentQuestionIndex((prevIndex) => {
//       if (prevIndex > 0) {
//         return prevIndex - 1;
//       } else {
//         return filteredQuestions.length - 1;
//       }
//     });
//   };

//   const handleNextQuestion = () => {
//     setCurrentQuestionIndex((prevIndex) => {
//       if (prevIndex < filteredQuestions.length - 1) {
//         return prevIndex + 1;
//       } else {
//         return 0;
//       }
//     });
//   };

//   // Funktion zum Umschalten des "favorite"-Flags für eine Frage
//   const handleToggleFavorite = (questionId) => {
//     setUserQuestions((prevUserQuestions) =>
//       prevUserQuestions.map((_question) =>
//         _question.id === questionId
//           ? { ..._question, favorite: !_question.favorite }
//           : _question
//       )
//     );
//   };

//   return (
//     <>
//       <Header
//         categories={categories}
//         selectedCategories={selectedCategories}
//         onCategoryChange={handleCategoryChange}
//       />
//       <QuestionContainer>
//         <Question
//           category={filteredQuestions[currentQuestionIndex].category}
//           question={filteredQuestions[currentQuestionIndex].question}
//           id={filteredQuestions[currentQuestionIndex].id}
//           onPrevQuestion={handlePrevQuestion}
//           onNextQuestion={handleNextQuestion}
//         />
//       </QuestionContainer>
//       {isAddingQuestion && (
//         <AddQuestion
//           onAddQuestion={handleAddQuestion}
//           setIsAddingQuestion={setIsAddingQuestion}
//         />
//       )}
//       {!isAddingQuestion && (
//         <Button
//           setIsAddingQuestion={setIsAddingQuestion}
//           id={filteredQuestions[currentQuestionIndex].id}
//           onToggleFavorite={handleToggleFavorite}
//         />
//       )}
//     </>
//   );
// };

// export default IndexPage;
