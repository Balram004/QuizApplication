import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { questions } from './questions';

const Quiz = () => {
  const TIME_LIMIT = 15;
  const { category, subCategory } = useParams();
  const navigate = useNavigate();

  const [questionSet, setQuestionSet] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [timeLeft, setTimeLeft] = useState(TIME_LIMIT);
  const [quizFinished, setQuizFinished] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);

  useEffect(() => {
    let questionsForCategory = [];
    if (subCategory && questions[category] && questions[category][subCategory]) {
      questionsForCategory = questions[category][subCategory] || [];
    } else if (!subCategory) {
      questionsForCategory = questions[category] || [];
    }
    setQuestionSet(questionsForCategory);
    setUserAnswers(Array(questionsForCategory.length).fill(null));
    setCurrentQuestionIndex(0); // Reset on category change
  }, [category, subCategory]);

  useEffect(() => {
    if (isAnswered) return;

    if (timeLeft === 0) {
      setIsAnswered(true);
      moveToNext(null); // Time's up, move to next question
      return;
    }

    const timerId = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [timeLeft, isAnswered]);

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      if (!quizFinished) {
        event.preventDefault();
        // Standard for most browsers
        event.returnValue = 'Are you sure you want to leave? Your progress will be lost.';
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [quizFinished]);

  const moveToNext = (selected) => {
    const newUserAnswers = [...userAnswers];
    newUserAnswers[currentQuestionIndex] = selected;
    setUserAnswers(newUserAnswers);

    setTimeout(() => {
      const nextQuestionIndex = currentQuestionIndex + 1;
      if (nextQuestionIndex < questionSet.length) {
        setCurrentQuestionIndex(nextQuestionIndex);
        setSelectedOption(null);
        setIsAnswered(false);
        setTimeLeft(TIME_LIMIT);
      } else {
        let finalScore = score;
        if (selected && selected === questionSet[currentQuestionIndex].answer) {
          finalScore += 1;
        }
        setQuizFinished(true);
        navigate('/result', { state: { 
          score: finalScore, 
          total: questionSet.length, 
          category: subCategory || category,
          questions: questionSet,
          userAnswers: newUserAnswers,
        } });
      }
    }, 1500); // Wait 1.5 seconds before moving on
  };

  const handleOptionClick = (option) => {
    if (isAnswered) return;

    setSelectedOption(option);
    setIsAnswered(true);
    if (option === questionSet[currentQuestionIndex].answer) {
      setScore(prevScore => prevScore + 1);
    }
    moveToNext(option);
  };

  const currentQuestion = questionSet[currentQuestionIndex];

  return (
    <div className="p-8 flex justify-center items-center flex-col min-h-screen">
      <h1 className="text-3xl font-bold capitalize">{subCategory || category} Quiz</h1>
      {currentQuestion ? (
        <div className="mt-8 p-6 bg-white/70 backdrop-blur-sm border-2 border-gray-300 rounded-xl shadow-2xl text-xl text-center w-full max-w-2xl">
          <div className="text-2xl font-bold mb-4">
            Time Left: <span className={timeLeft <= 5 ? 'text-red-500' : ''}>{timeLeft}</span>s
          </div>
          <h2 className="text-2xl mb-4">{currentQuestion.question}</h2>
          <p className="mb-4">Question {currentQuestionIndex + 1} of {questionSet.length}</p>
          <div className="grid grid-cols-2 gap-4">
            {currentQuestion.options.map((option, index) => {
              const isCorrect = option === currentQuestion.answer;
              const isSelected = option === selectedOption;
              let buttonClass = 'bg-gray-200 hover:bg-gray-300';

              if (isAnswered && isSelected) {
                if (isCorrect) {
                  buttonClass = 'bg-green-500 text-white'; // User's correct choice
                } else {
                  buttonClass = 'bg-red-500 text-white'; // User's incorrect choice
                }
              }
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