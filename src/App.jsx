import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Nav from "./Components/Nav";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import Quiz from "./pages/Quiz";
import CategorySelection from "./pages/CategorySelection";
import Result from "./pages/Result";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import Leaderboard from "./Components/Leaderboard";
import React from "react";
import ProtectedRoute from "./pages/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext.jsx"; // Assuming you create this file

const AppContent = () => {
  const location = useLocation();
  const showNav = location.pathname !== '/' && location.pathname !== '/signup';

  return (
    <div className="min-h-screen w-full">
      <div
        className="fixed top-0 left-0 w-full h-full bg-cover bg-center -z-20"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=2728&auto=format&fit=crop')",
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full  bg-opacity-50"></div>
      </div>
      {showNav && <Nav />}
      <main className="relative z-10">
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/service" element={<Service />} />
            <Route path="/select-category" element={<CategorySelection />} />
            <Route path="/quiz/:category/:subCategory?" element={<Quiz />} />
            <Route path="/result" element={<Result />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
          </Route>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </main>
    </div>
  );
}

const App = () => {
  return (
    <div>
      <BrowserRouter basename="/QuizApplication">
        <AuthProvider>
          <AppContent />
        </AuthProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
