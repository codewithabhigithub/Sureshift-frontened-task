import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './Components/context/AuthContext'; // Ensure AuthProvider is imported
import PrivateRoute from './Components/PrivateRoute'; // Ensure PrivateRoute is imported
import Home from "./Components/Home";
import AdminDashboard from './Components/AdminDashboard';
import UserForm from './Components/UserForm';
import LoginForm from './Components/LoginForm';
import OrderTracking from './Components/OrderTracking';


function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="container mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user-form" element={<UserForm />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/order_track" element={<OrderTracking/>} />
            <Route path="/admin-dashboard" element={<PrivateRoute element={<AdminDashboard />} />} />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;

