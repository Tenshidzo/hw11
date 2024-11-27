import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import UserList from './pages/UserList';
import UserProfile from './pages/UserProfile';
import EditProfile from './pages/EditProfile';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/profile/:id" element={<UserProfile />} />
          <Route path="/edit/:id" element={<EditProfile />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
