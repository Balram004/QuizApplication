import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { questions } from './questions';

const CategorySelection = () => {
  const [showNonTech, setShowNonTech] = useState(false);
  const [showTech, setShowTech] = useState(false);
  const navigate = useNavigate();

  const nonTechCategories = Object.keys(questions['non-tech'] || {});
  const techCategories = Object.keys(questions.tech);

  const handleNonTechClick = () => {
    setShowNonTech(true);
  };

  const handleBackClick = () => {
    setShowNonTech(false);
    setShowTech(false);
  };

  const handleSubCategoryClick = (category, subCategory) => {
    navigate(`/quiz/${category}/${encodeURIComponent(subCategory)}`);
  };

  const handleTechClick = () => {
    setShowTech(true);
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-4 text-center">
      <div className="relative z-10 bg-white/30 backdrop-blur-md p-8 rounded-xl shadow-lg">
        {!showTech && !showNonTech ? (
          <>
            <h1 className="text-5xl font-bold text-black mb-4">Choose a Category</h1>
            <p className="text-xl text-gray-600 mb-8 text-black">Select the topic you want to be quizzed on.</p>
            <div className="flex justify-center gap-4">
              <button onClick={handleTechClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition-colors">
                Tech
              </button>
              <button onClick={handleNonTechClick} className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition-colors">
                Non-Tech
              </button>
            </div>
          </>
        ) : showTech ? (
          <>
            <h1 className="text-5xl font-bold text-black mb-4">Tech Categories</h1>
            <p className="text-xl text-gray-600 mb-8 text-black">Select a sub-category to start the quiz.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl">
              {techCategories.map((subCategory) => (
                <button key={subCategory} onClick={() => handleSubCategoryClick('tech', subCategory)} className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition-colors">
                  {subCategory}
                </button>
              ))}
            </div>
            <button onClick={handleBackClick} className="mt-8 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg">
              Back to Main Categories
            </button>
          </>
        ) : (
          <>
            <h1 className="text-5xl font-bold text-black mb-4">Non-Tech Categories</h1>
            <p className="text-xl text-gray-600 mb-8 text-black">Select a sub-category to start the quiz.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl">
              {nonTechCategories.map((subCategory) => (
                <button key={subCategory} onClick={() => handleSubCategoryClick('non-tech', subCategory)} className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition-colors">
                  {subCategory}
                </button>
              ))}
            </div>
            <button onClick={handleBackClick} className="mt-8 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg">
              Back to Main Categories
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default CategorySelection;