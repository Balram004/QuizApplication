import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { questions } from './questions';

const Quiz = () => {
  const { category } = useParams();
  const navigate = useNavigate();

  const [questionSet, setQuestionSet] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);

  useEffect(() => {
    const questionsForCategory = questions[category] || [];
    setQuestionSet(questionsForCategory);
  }, [category]);

  const handleOptionClick = (option) => {
    if (isAnswered) return;

    setSelectedOption(option);
    setIsAnswered(true);

    if (option === questionSet[currentQuestionIndex].answer) {
      setScore(prevScore => prevScore + 1);
    }

    setTimeout(() => {
      const nextQuestionIndex = currentQuestionIndex + 1;
      if (nextQuestionIndex < questionSet.length) {
        setCurrentQuestionIndex(nextQuestionIndex);
        setSelectedOption(null);
        setIsAnswered(false);
      } else {
        navigate('/result', { state: { score: score + (option === questionSet[currentQuestionIndex].answer ? 1 : 0), total: questionSet.length, category: category } });
      }
    }, 1500); // Wait 1.5 seconds before moving to the next question
  };

  const currentQuestion = questionSet[currentQuestionIndex];

  return (
    <div className="p-8 flex justify-center items-center flex-col min-h-screen">
      <h1 className="text-3xl font-bold capitalize">{category} Quiz</h1>
      {currentQuestion ? (
        <div className="mt-8 text-xl text-center w-full max-w-2xl">
          <h2 className="text-2xl mb-4">{currentQuestion.question}</h2>
          <p className="mb-4">Question {currentQuestionIndex + 1} of {questionSet.length}</p>
          <div className="grid grid-cols-2 gap-4">
            {currentQuestion.options.map((option, index) => {
              const isCorrect = option === currentQuestion.answer;
              const isSelected = option === selectedOption;
              const buttonClass = isAnswered
                ? (isCorrect ? 'bg-green-500' : (isSelected ? 'bg-red-500' : 'bg-gray-200'))
                : 'bg-gray-200 hover:bg-gray-300';
              return (
                <button key={index} onClick={() => handleOptionClick(option)} disabled={isAnswered} className={`p-4 rounded-lg text-black transition-colors ${buttonClass}`}>{option}</button>
              );
            })}
          </div>
        </div>
      ) : (
        <p className="mt-4 text-xl">Loading questions or category not found...</p>
      )}
    </div>
  );
}

export default Quiz