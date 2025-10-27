import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext';

const Nav = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div>
      <nav className='flex justify-between items-center p-4 bg-gray-600 text-white px-8'>
        <h1 className='text-2xl font-bold'>
          <Link to={user ? "/home" : "/"}>Quiz App</Link>
        </h1>
        {user ? (
          <ul className="flex items-center gap-5 text-xl font-bold">
              <li><Link to="/home">Home</Link></li>
              <li><Link to="/About">About</Link></li>
              <li><Link to="/Service">Service</Link></li>
              <li><Link to="/Contact">Contact</Link></li>
              <li><Link to="/leaderboard">Leaderboard</Link></li>
              <li><Link to="/profile" className="text-yellow-400">Welcome, {user.username}</Link></li>
              <li><button onClick={handleLogout} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Logout</button></li>
          </ul>
        ) : (
          <ul className="flex items-center gap-5 text-xl font-bold">
              <li><Link to="/About">About</Link></li>
              <li><Link to="/Contact">Contact</Link></li>
              <li><Link to="/leaderboard">Leaderboard</Link></li>
          </ul>
        )}
      </nav>
    </div>
  )
}

export default Nav
