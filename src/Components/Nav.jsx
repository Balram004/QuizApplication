import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Nav = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem('quiz_current_user'));
    if (currentUser) {
      setUser(currentUser);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('quiz_current_user');
    navigate('/');
  };

  return (
    <div>
      <nav className='flex justify-between items-center p-4 bg-gray-600 text-white px-8'>
        <h1 className='text-2xl font-bold'><Link to="/home">Quiz App</Link></h1>
        <ul className="flex items-center gap-5 text-xl font-bold">
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Service">Service</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
            <li><Link to="/leaderboard">Leaderboard</Link></li>
            {user && <li><Link to="/profile" className="text-yellow-400">Welcome, {user.username}</Link></li>}
            <li><button onClick={handleLogout} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Logout</button></li>
        </ul>
      </nav>
    </div>
  )
}

export default Nav
