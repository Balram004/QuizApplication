import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center">      
      <div className="bg-white/30 backdrop-blur-md p-8 rounded-xl shadow-lg">
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
