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
import React from "react";
import { AuthProvider } from "./context/AuthContext.jsx"; // Assuming you create this file

const AppContent = () => {
  const location = useLocation();
  const showNav = location.pathname !== '/' && location.pathname !== '/signup';

  return (
    <>
      {showNav && <Nav />}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
        <Route path="/select-category" element={<CategorySelection />} />
        <Route path="/quiz/:category" element={<Quiz />} />
        <Route path="/result" element={<Result />} />
          <Route path="/profile" element={<Profile />} />
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <AuthProvider>
          <AppContent />
        </AuthProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
