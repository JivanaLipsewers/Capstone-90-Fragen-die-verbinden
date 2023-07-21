import { useState } from "react";
import { Question } from "../components/Question/index.js";
import { FavoriteButton } from "../components/FavoriteButton/index.js";
import Header from "@/components/Header/index.js";

const initialQuestions = [
  {
    id: "1a",
    question: "In welchen Momenten bist du am glücklichsten?",
    category: "Über dich",
    isFavorite: false,
  },
  {
    id: "1b",
    question: "Welchen Stellenwert hat Familie in deinem Leben?",
    category: "Über dich",
    isFavorite: false,
  },
  {
    id: "1c",
    question: "Was schätzt du am meisten an dir?",
    category: "Über dich",
    isFavorite: false,
  },
  {
    id: "1d",
    question: "Welchen Wunsch möchtest du dir bald erfüllen?",
    category: "Über dich",
    isFavorite: false,
  },
  {
    id: "1e",
    question: "Welche Entscheidung würdest du heute anders fällen?",
    category: "Über dich",
    isFavorite: false,
  },

  {
    id: "2a",
    question: "Was nervt dich an mir?",
    category: "Über mich",
    isFavorite: false,
  },
  {
    id: "2b",
    question: "Welche meiner Entscheidungen bewunderst du?",
    category: "Über mich",
    isFavorite: false,
  },
  {
    id: "2c",
    question: "Was, denkst du, würde mir gut tun?",
    category: "Über mich",
    isFavorite: false,
  },
  {
    id: "2d",
    question: "Was schätzt du am meisten an mir?",
    category: "Über mich",
    isFavorite: false,
  },
  {
    id: "2e",
    question: "Welchen Eindruck mache ich zurzeit auf dich?",
    category: "Über mich",
    isFavorite: false,
  },

  {
    id: "3a",
    question:
      "Welche gemeinsamen Erlebnisse sind dir besonders in Erinnerung geblieben?",
    category: "Über uns",
    isFavorite: false,
  },
  {
    id: "3b",
    question: "Worüber sprichst du gerne mit mir?",
    category: "Über uns",
    isFavorite: false,
  },
  {
    id: "3c",
    question: "Gibt es etwas, worum du mich beneidest?",
    category: "Über uns",
    isFavorite: false,
  },
  {
    id: "3d",
    question: "Welche Rolle spiele ich in deinem Leben?",
    category: "Über uns",
    isFavorite: false,
  },
  {
    id: "3e",
    question: "Inwiefern bereichere ich dein Leben?",
    category: "Über uns",
    isFavorite: false,
  },
];

export default function App() {
  const [questions, setQuestions] = useState(initialQuestions);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const currentQuestion = questions[currentQuestionIndex];

  function handlePrevQuestion() {
    if (currentQuestionIndex >= 1) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  }
  function handleNextQuestion() {
    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  }

  function handleToggleFavorite() {
    const updatedQuestions = questions.map((question) =>
      question.id === currentQuestion.id
        ? { ...question, isFavorite: !question.isFavorite }
        : question
    );
    setQuestions(updatedQuestions);
  }

  return (
    <>
      <Header />
      <Question
        question={currentQuestion}
        onPrevQuestion={handlePrevQuestion}
        onNextQuestion={handleNextQuestion}
      />

      <FavoriteButton
        isFavorite={currentQuestion.isFavorite}
        onToggleFavorite={handleToggleFavorite}
      />
    </>
  );
}
