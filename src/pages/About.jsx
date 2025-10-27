import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-black mb-8">
          About Our Quiz App
        </h1>
        
        <div className="bg-white/50 backdrop-blur-lg shadow-lg rounded-lg p-8 space-y-6">
          <p className="text-lg text-gray-800">
            Welcome to the ultimate Quiz Application! Our platform is designed to provide a fun and engaging way to test your knowledge across various domains. Whether you're a tech enthusiast or a general knowledge buff, we have something for everyone.
          </p>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-800">Key Features</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-800">
              <li>
                <span className="font-semibold">User Authentication:</span> Securely sign up and log in to your personal account.
              </li>
              <li>
                <span className="font-semibold">Multiple Categories:</span> Choose between 'Tech' and 'Non-Tech' quizzes to match your interests.
              </li>
              <li>
                <span className="font-semibold">Interactive Quiz Experience:</span> Answer questions and get immediate feedback on your choices.
              </li>
              <li>
                <span className="font-semibold">Score Tracking:</span> After each quiz, see your score and how well you performed.
              </li>
              <li>
                <span className="font-semibold">Profile & History:</span> Your personal profile page keeps a history of all your quiz attempts, so you can track your progress over time.
              </li>
            </ul>
          </div>

          <p className="text-lg text-gray-800">
            This application was built using modern web technologies including React for the frontend, and Tailwind CSS for styling. It's designed to be responsive and work seamlessly across all your devices.
          </p>

          <p className="text-lg text-gray-800">
            We are constantly working to improve the app and add new features and questions. Thank you for playing!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
