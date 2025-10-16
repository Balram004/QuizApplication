import React from 'react';
import { Link } from 'react-router-dom';

const CategorySelection = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-4 text-center">
      <div className="relative z-10">
        <h1 className="text-5xl font-bold text-black mb-4">Choose a Category</h1>
        <p className="text-xl text-gray-600 mb-8 text-black">Select the topic you want to be quizzed on.</p>
        <div className="flex justify-center gap-4">
          <Link to="/quiz/tech">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition-colors">
              Tech
            </button>
          </Link>
          <Link to="/quiz/non-tech">
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition-colors">
              Non-Tech
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategorySelection;