import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    // The main container is now used for positioning the background and content
    <div className="relative min-h-screen flex flex-col items-center justify-center p-4 text-center">
      {/* This div is for the background image and a dark overlay */}
      <div 
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        //  style={{ backgroundImage: "url('/quiz-bg.jpg')" }} // Make sure 'quiz-bg.jpg' is in your /public folder
      >
        <div className="w-full h-full"></div>
      </div>
      {/* This div holds the content and sits on top of the background */}
      <div className="relative z-10">
        <h1 className="text-5xl font-bold text-black mb-4">Welcome to the Quiz App!</h1>
        <p className="text-xl text-gray-600 mb-8 text-black">Ready to test your knowledge?</p>
        <Link to="/select-category">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition-colors">
            Start Quiz
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Home
