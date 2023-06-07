import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginForm from './containers/LoginForm';
import RegisterForm from './containers/RegisterForm';
import { AuthProvider } from './components/auth/AuthProvider';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<LoginForm />} />
          <Route path="/signup" element={<RegisterForm />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
