import React from 'react';

const Service = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-8">
          Our Services
        </h1>
        
        <div className="bg-white shadow-lg rounded-lg p-8 space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-800">Knowledge Assessment</h2>
            <p className="text-lg text-gray-700">
              Our primary service is to provide a robust platform for knowledge assessment. With a diverse range of questions in both tech and non-tech categories, you can accurately gauge your understanding of various subjects.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-800">Personalized Profile & Progress Tracking</h2>
            <p className="text-lg text-gray-700">
              We offer a personalized user experience where you can track your quiz history and scores. Your profile page serves as a dashboard to monitor your progress, identify areas for improvement, and celebrate your achievements.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-800">Engaging & Fun Learning</h2>
            <p className="text-lg text-gray-700">
              Learning doesn't have to be boring. Our interactive quiz format, complete with immediate feedback, makes the learning process enjoyable and engaging. Challenge yourself and have fun while expanding your knowledge.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-800">Secure & Private</h2>
            <p className="text-lg text-gray-700">
              We prioritize your privacy and security. With our simple and secure local storage-based authentication, your data remains on your device, giving you full control.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Service
