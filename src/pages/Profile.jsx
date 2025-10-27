import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [results, setResults] = useState([]);

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem('quiz_current_user'));
    if (!currentUser) {
      navigate('/'); // Redirect to login if not logged in
      return;
    }

    const allUsers = JSON.parse(localStorage.getItem('quiz_users')) || [];
    const userData = allUsers.find(u => u.email === currentUser.email);

    if (userData) {
      setUser(userData);
      setResults(userData.results || []);
    }
  }, [navigate]);

  if (!user) {
    return <div className="text-center p-8">Loading profile...</div>;
  }

  return (
    <div className="min-h-screen container mx-auto p-4 sm:p-8">
      <div className="bg-white/50 backdrop-blur-lg p-6 rounded-xl shadow-2xl mb-8">
        <h1 className="text-4xl font-bold mb-4 text-black">Profile</h1>
        <div className="text-xl text-gray-800">
          <p><span className="font-bold">Username:</span> {user.username}</p>
          <p><span className="font-bold">Email:</span> {user.email}</p>
        </div>
      </div>

      <h2 className="text-3xl font-bold mb-4 text-white">Quiz History</h2>
      <div className="bg-white/50 backdrop-blur-lg p-6 rounded-xl shadow-2xl">
        {results.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {results.map((result, index) => {
              const percentage = result.total > 0 ? (result.score / result.total) * 100 : 0;
              let progressColor = "bg-red-500";
              if (percentage >= 80) {
                progressColor = "bg-green-500";
              } else if (percentage >= 50) {
                progressColor = "bg-yellow-500";
              }
              return (
                <div key={index} className="bg-white/70 p-4 rounded-lg shadow-lg flex flex-col justify-between">
                  <div>
                    <p className="font-bold text-lg capitalize text-black">{result.category}</p>
                    <p className="text-sm text-gray-600 mb-2">{new Date(result.date).toLocaleString()}</p>
                    <p className="text-gray-800 font-semibold">Score: {result.score} / {result.total}</p>
                  </div>
                  <div className="mt-2">
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className={`${progressColor} h-2.5 rounded-full`} style={{ width: `${percentage}%` }}></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <p>You have not completed any quizzes yet.</p>
        )}
      </div>
    </div>
  );
};

export default Profile;