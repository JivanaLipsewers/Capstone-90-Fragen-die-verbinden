import { useState } from 'react';
import Filter from '../components/Filter/index.js';
import Header from "../components/Header/index.js";
import Question from "../components/Question/index.js";
import Button from "../components/Button/index.js";
import { QuestionContainer } from "../components/Question/styles.js";

const questions = [
  {
    category: 'Über dich',
    question: 'In welchen Momenten bist du am glücklichsten?',
  },
  {
    category: 'Über dich',
    question: 'Welchen Stellenwert hat Familie in deinem Leben?',
  },
  {
    category: 'Über dich',
    question: 'Was schätzt du am meisten an dir?',
  },
  {
    category: 'Über dich',
    question: 'Welchen Wunsch möchtest du dir bald erfüllen?',
  },
  {
    category: 'Über dich',
    question: 'Welche Entscheidung würdest du heute anders fällen?',
  },
  
  
  {
    category: 'Über mich',
    question: 'Was nervt dich an mir?',
  },
  {
    category: 'Über mich',
    question: 'Welche meiner Entscheidungen bewunderst du?',
  },
  {
    category: 'Über mich',
    question: 'Was, denkst du, würde mir gut tun?',
  },
  {
    category: 'Über mich',
    question: 'Was schätzt du am meisten an mir?',
  },
  {
    category: 'Über mich',
    question: 'Welchen Eindruck mache ich zurzeit auf dich?',
  },

  {
    category: 'Über uns',
    question: 'Welche gemeinsamen Erlebnisse sind dir besonders in Erinnerung geblieben?',
  },
  {
    category: 'Über uns',
    question: 'Worüber sprichst du gerne mit mir?',
  },
  {
    category: 'Über uns',
    question: 'Gibt es etwas, worum du mich beneidest?',
  },
  {
    category: 'Über uns',
    question: 'Welche Rolle spiele ich in deinem Leben?',
  },
  {
    category: 'Über uns',
    question: 'Inwiefern bereichere ich dein Leben?',
  },
  // Weitere später Fragen hier
];

const categories = ['Über dich', 'Über mich', 'Über uns', 'New Questions', 'Favoriten', 'Notizen'];

const IndexPage = () => {
  const [selectedCategories, setSelectedCategories] = useState(categories);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleCategoryChange = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const filteredQuestions = selectedCategories.length > 0
    ? questions.filter((question) => selectedCategories.includes(question.category))
    : questions;

  const handlePrevQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => {
      if (prevIndex > 0) {
        return prevIndex - 1;
      } else {
        return filteredQuestions.length - 1;
      }
    });
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => {
      if (prevIndex < filteredQuestions.length - 1) {
        return prevIndex + 1;
      } else {
        return 0;
      }
    });
  };

  return (
    <>
      <Header categories={categories} selectedCategories={selectedCategories} onCategoryChange={handleCategoryChange} />
      <QuestionContainer>
        <Question
          category={filteredQuestions[currentQuestionIndex].category}
          question={filteredQuestions[currentQuestionIndex].question}
          onPrevQuestion={handlePrevQuestion}
          onNextQuestion={handleNextQuestion}
        />
      </QuestionContainer>
      <Button />
    </>
  );
};

export default IndexPage;