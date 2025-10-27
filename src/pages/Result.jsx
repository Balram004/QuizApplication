import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

const Result = () => {
  const location = useLocation();
  const { score, total, category } = location.state || { score: 0, total: 0, category: 'unknown' };

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem('quiz_current_user'));
    if (currentUser) {
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
  }, [score, total, category]);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen p-4 text-center">
      <div className="relative z-10 p-8 bg-white rounded-lg shadow-lg">
        <h1 className="mb-4 text-4xl font-bold text-black">Quiz Completed!</h1>
        <p className="mb-6 text-2xl text-gray-700">You scored {score} out of {total}</p>
        <div className="flex justify-center gap-4">
          <Link to="/select-category">
            <button className="px-6 py-3 text-lg font-bold text-white transition-colors bg-blue-500 rounded-lg hover:bg-blue-700">Play Again</button>
          </Link>
          <Link to="/home">
            <button className="px-6 py-3 text-lg font-bold text-white transition-colors bg-gray-500 rounded-lg hover:bg-gray-700">Go to Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Result;