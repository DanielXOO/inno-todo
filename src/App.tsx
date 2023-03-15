import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginForm from './containers/LoginForm';
import RegisterForm from './containers/RegisterForm';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/registration" element={<RegisterForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
