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
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">Profile</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
        <p className="text-xl"><span className="font-bold">Username:</span> {user.username}</p>
        <p className="text-xl"><span className="font-bold">Email:</span> {user.email}</p>
      </div>

      <h2 className="text-3xl font-bold mb-4">Quiz History</h2>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        {results.length > 0 ? (
          <ul className="space-y-4">
            {results.map((result, index) => (
              <li key={index} className="p-4 border rounded-lg">
                <p className="font-bold text-lg capitalize">Category: {result.category}</p>
                <p>Score: {result.score} / {result.total}</p>
                <p className="text-sm text-gray-500">Date: {new Date(result.date).toLocaleString()}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>You have not completed any quizzes yet.</p>
        )}
      </div>
    </div>
  );
};

export default Profile;