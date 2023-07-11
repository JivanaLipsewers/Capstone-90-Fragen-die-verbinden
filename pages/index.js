import { useState } from 'react';
import Filter from '../components/Filter/index.js';
import Header from "../components/Header/index.js";
import Question from "../components/Question/index.js";
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

const categories = ['Über dich', 'Über mich', 'Über uns'];

const IndexPage = () => {
  const [selectedCategories, setSelectedCategories] = useState(categories);

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

  return (
    <>
      <Header />
      <Filter categories={categories} selectedCategories={selectedCategories} onCategoryChange={handleCategoryChange} />
      {filteredQuestions.length > 0 ? (
        filteredQuestions.map((question, index) => (
          <Question key={index} category={question.category} question={question.question} />
        ))
      ) : (
        <p>Keine Fragen gefunden.</p>
      )}
    </>
  );
};

export default IndexPage;