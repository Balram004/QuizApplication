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
              <li>
                <Link to="/profile" className="flex items-center text-yellow-400 hover:text-yellow-300 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                  {user.username}
                </Link>
              </li>
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
