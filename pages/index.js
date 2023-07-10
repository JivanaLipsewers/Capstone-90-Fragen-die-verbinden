import React from 'react';
import { Header, Question } from '../components/Question.js';

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
  // Weitere Fragen hinzufügen...
];

const IndexPage = () => {
  return (
    <div>
      <Header />
      {questions.map((question, index) => (
        <div key={index} style={{ marginBottom: '160px' }}>
          <Question category={question.category} question={question.question} />
        </div>
      ))}
    </div>
  );
};

export default IndexPage;
