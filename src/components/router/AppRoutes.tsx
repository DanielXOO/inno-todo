import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginForm from '../../containers/LoginForm';
import ProtectedRoute from './ProtectedRoute';
import RegisterForm from '../../containers/RegisterForm';
import { useAuth } from '../auth/AuthProvider';
import Loader from '../ui/Loader';

const AppRoutes: React.FC = () => {
  const { isLoading } = useAuth();

  return (
    <Loader isLoading={isLoading}>
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<LoginForm />} />
          <Route path="/signup" element={<RegisterForm />} />
        </Routes>
      </BrowserRouter>
    </Loader>
  );
};

export default AppRoutes;
