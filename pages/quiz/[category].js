import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const questions = {
  geography: [
    { question: "What is the capital of France?", options: ["Paris", "London", "Berlin"], answer: "Paris" },
    { question: "Which is the largest ocean?", options: ["Atlantic", "Pacific", "Indian"], answer: "Pacific" },
    { question: "In which continent is Egypt located?", options: ["Asia", "Africa", "Europe"], answer: "Africa" }
  ],
  history: [
    { question: "Who was the first president of the USA?", options: ["George Washington", "Abraham Lincoln", "Thomas Jefferson"], answer: "George Washington" },
    { question: "In what year did World War II end?", options: ["1945", "1939", "1918"], answer: "1945" },
    { question: "Who discovered America?", options: ["Christopher Columbus", "Marco Polo", "James Cook"], answer: "Christopher Columbus" }
  ],
  mathematics: [
    { question: "What is 5 + 3?", options: ["8", "9", "7"], answer: "8" },
    { question: "What is the square root of 16?", options: ["4", "5", "6"], answer: "4" },
    { question: "What is 10 / 2?", options: ["4", "5", "6"], answer: "5" }
  ]
};

export default function Quiz() {
  const router = useRouter();
  const { category } = router.query;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const categoryQuestions = questions[category] || [];

  const handleAnswerOptionClick = (selectedAnswer) => {
    if (selectedAnswer === categoryQuestions[currentQuestion].answer) {
      setScore((prevScore) => prevScore + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < categoryQuestions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  if (!categoryQuestions.length) {
    return <div className="container">Loading...</div>;
  }

  return (
    <div className="container">
      {showScore ? (
        <div>
          <h1>Your score: {score} out of {categoryQuestions.length}</h1>
          <Link href='/finish'>
            <button>Finish</button>
          </Link>
        </div>
      ) : (
        <div>
          <h1>{category} Quiz</h1>
          <div>
            <p>{categoryQuestions[currentQuestion].question}</p>
            {categoryQuestions[currentQuestion].options.map((option, index) => (
              <button key={index} onClick={() => handleAnswerOptionClick(option)}>
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
