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
    <div className="relative min-h-screen flex flex-col items-center justify-center p-4 text-center">
      <div className="relative z-10 bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-black mb-4">Quiz Completed!</h1>
        <p className="text-2xl text-gray-700 mb-6">You scored {score} out of {total}</p>
        <div className="flex justify-center gap-4">
          <Link to="/select-category">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition-colors">Play Again</button>
          </Link>
          <Link to="/home">
            <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition-colors">Go to Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Result;