import React, { useState, useEffect } from 'react';

const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);

  useEffect(() => {
    const allUsers = JSON.parse(localStorage.getItem('quiz_users')) || [];

    const rankedUsers = allUsers
      .map(user => {
        const totalScore = (user.results || []).reduce((acc, result) => acc + result.score, 0);
        return {
          username: user.username,
          totalScore: totalScore,
        };
      })
      .filter(user => user.totalScore > 0)
      .sort((a, b) => b.totalScore - a.totalScore);

    setLeaderboardData(rankedUsers);
  }, []);

  return (
    <div className="min-h-screen container mx-auto p-4 sm:p-8">
      <div className="bg-white/50 backdrop-blur-lg p-6 rounded-xl shadow-2xl">
        <h1 className="text-4xl font-bold mb-6 text-center text-black">Leaderboard</h1>
        {leaderboardData.length > 0 ? (
          <ol className="space-y-4">
            {leaderboardData.map((user, index) => (
              <li key={index} className="flex items-center justify-between bg-white/70 p-4 rounded-lg shadow-md">
                <span className="text-lg font-bold text-gray-800">{index + 1}. {user.username}</span>
                <span className="text-lg font-semibold text-blue-600">{user.totalScore} Points</span>
              </li>
            ))}
          </ol>
        ) : (
          <p className="text-center text-lg text-gray-800">No one has taken a quiz yet. Be the first!</p>
        )}
      </div>
    </div>
  );
};

export default Leaderboard;