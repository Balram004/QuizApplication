import React, { useEffect, useRef, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

const Result = () => {
  const location = useLocation();
  const { score, total, category, questions, userAnswers } = location.state || { score: 0, total: 0, category: 'unknown', questions: [], userAnswers: [] };
  const isMounted = useRef(false);
  const [showReview, setShowReview] = useState(false);

  useEffect(() => {
    // Prevent effect from running twice in development with StrictMode
    if (isMounted.current) return;
    isMounted.current = true;

    const currentUser = JSON.parse(localStorage.getItem('quiz_current_user'));
    if (currentUser && total > 0) {
      const allUsers = JSON.parse(localStorage.getItem('quiz_users')) || [];
      const userIndex = allUsers.findIndex(u => u.email === currentUser.email);

      if (userIndex !== -1) {
        const newResult = {
          category,
          score,
          total,
          date: new Date().toISOString(),
        };
        allUsers[userIndex].results = [...(allUsers[userIndex].results || []), newResult];
        localStorage.setItem('quiz_users', JSON.stringify(allUsers));
      }
    }
  }, []); // Empty dependency array ensures this runs only once

  const percentage = total > 0 ? (score / total) * 100 : 0;
  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  let feedbackMessage = "";
  let progressColor = "text-red-500";
  if (percentage >= 80) {
    feedbackMessage = "Excellent! You're a master!";
    progressColor = "text-green-500";
  } else if (percentage >= 50) {
    feedbackMessage = "Good job! You're getting there.";
    progressColor = "text-yellow-500";
  } else {
    feedbackMessage = "Keep practicing! You can do better.";
  }

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen p-4 text-center">
      <div className="relative z-10 p-8 bg-white/50 backdrop-blur-lg rounded-xl shadow-2xl w-full max-w-lg text-black">
        <h1 className="mb-2 text-4xl font-bold">Quiz Completed!</h1>
        <p className="mb-6 text-xl text-gray-800 capitalize">Category: {category}</p>

        <div className="relative flex items-center justify-center w-48 h-48 mx-auto mb-6">
          <svg className="w-full h-full" viewBox="0 0 140 140">
            <circle className="text-gray-300" strokeWidth="10" stroke="currentColor" fill="transparent" r={radius} cx="70" cy="70" />
            <circle className={progressColor} strokeWidth="10" strokeDasharray={circumference} strokeDashoffset={offset} strokeLinecap="round" stroke="currentColor" fill="transparent" r={radius} cx="70" cy="70" style={{ transform: 'rotate(-90deg)', transformOrigin: '50% 50%' }} />
          </svg>
          <div className="absolute flex flex-col items-center justify-center">
            <span className="text-4xl font-bold">{Math.round(percentage)}%</span>
            <span className="text-lg">{score} / {total}</span>
          </div>
        </div>
        <p className={`mb-8 text-2xl font-semibold ${progressColor}`}>{feedbackMessage}</p>
        <div className="flex justify-center gap-4">
          <Link to="/select-category">
            <button className="px-6 py-3 text-lg font-bold text-white transition-colors bg-blue-500 rounded-lg hover:bg-blue-700">Play Again</button>
          </Link>
          <Link to="/home">
            <button className="px-6 py-3 text-lg font-bold text-white transition-colors bg-gray-500 rounded-lg hover:bg-gray-700">Go to Home</button>
          </Link>
          {questions && questions.length > 0 && (
            <button onClick={() => setShowReview(!showReview)} className="px-6 py-3 text-lg font-bold text-white transition-colors bg-purple-500 rounded-lg hover:bg-purple-700">
              {showReview ? 'Hide Review' : 'Review Answers'}
            </button>
          )}
        </div>
      </div>

      {showReview && (
        <div className="mt-8 w-full max-w-3xl">
          <h2 className="text-3xl font-bold text-center text-white mb-6">Answer Review</h2>
          <div className="space-y-6">
            {questions.map((question, index) => (
              <div key={index} className="bg-white/50 backdrop-blur-lg p-6 rounded-xl shadow-lg">
                <p className="text-xl font-semibold text-black mb-4">{index + 1}. {question.question}</p>
                <div className="space-y-2">
                  {question.options.map((option, i) => {
                    const isCorrect = option === question.answer;
                    const isUserChoice = option === userAnswers[index];
                    let optionClass = 'bg-gray-200';
                    if (isCorrect) {
                      optionClass = 'bg-green-500 text-white';
                    } else if (isUserChoice) {
                      optionClass = 'bg-red-500 text-white';
                    }
                    return <div key={i} className={`p-3 rounded-lg ${optionClass}`}>{option}</div>;
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Result;