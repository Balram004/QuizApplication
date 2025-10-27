import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-black mb-8">
          About Our Quiz App
        </h1>
        
        <div className="bg-white/60 backdrop-blur-xl shadow-2xl rounded-xl p-8 space-y-8">
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

          <div className="pt-6 border-t border-gray-300">
            <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">Tech Stack</h2>
            <div className="flex justify-center items-center gap-8">
              <div className="flex flex-col items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.23174 23 20.46348" className="w-16 h-16 text-blue-500">
                  <title>React Logo</title>
                  <circle cx="0" cy="0" r="2.05" fill="currentColor"/>
                  <g stroke="currentColor" strokeWidth="1" fill="none">
                    <ellipse rx="11" ry="4.2"/>
                    <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
                    <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
                  </g>
                </svg>
                <span className="font-semibold text-gray-700">React</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 154" className="w-20 h-16">
                  <path fill="#38BDF8" d="M128 0C93.867 0 72.533 17.333 64 25.6C55.467 17.333 34.133 0 0 0v51.2c34.133 0 55.467 17.333 64 25.6c8.533-8.267 29.867-25.6 64-25.6s55.467 17.333 64 25.6c8.533-8.267 29.867-25.6 64-25.6V0c-34.133 0-55.467 17.333-64 25.6C183.467 17.333 162.133 0 128 0z"/>
                  <path fill="#38BDF8" d="M128 76.8c-34.133 0-55.467 17.333-64 25.6c-8.533-8.267-29.867-25.6-64-25.6v51.2c34.133 0 55.467 17.333 64 25.6c8.533-8.267 29.867-25.6 64-25.6s55.467 17.333 64 25.6c8.533-8.267 29.867-25.6 64-25.6v-51.2c-34.133 0-55.467 17.333-64 25.6c-8.533-8.267-29.867-25.6-64-25.6z"/>
                </svg>
                <span className="font-semibold text-gray-700">Tailwind CSS</span>
              </div>
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-gray-300">
            <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Meet the Creator</h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <img 
                className="w-28 h-28 rounded-full shadow-lg border-4 border-white" 
                src="https://avatars.githubusercontent.com/u/148966368?v=4" // Aap yahan apni photo ka URL daal sakte hain
                alt="Balram" 
              />
              <div className="text-center sm:text-left">
                <p className="text-2xl font-bold text-gray-900">Balram</p>
                <p className="text-md text-gray-700 mt-1">A passionate developer who loves building things for the web.</p>
                <div className="flex justify-center sm:justify-start gap-4 mt-3">
                  <a href="https://github.com/Balram-web" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.165 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.942.359.308.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" /></svg>
                  </a>
                  {/* Yahan aap apne aur social media links add kar sakte hain */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
