import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginContainer from '../../containers/LoginContainer';
import RegisterContainer from '../../containers/RegisterContainer';
import { useAuth } from '../auth/AuthProvider';
import Loader from '../ui/Loader';
import TasksContainer from '../../containers/TasksContainer';
import ProtectedRoute from './ProtectedRoute';

const AppRoutes: React.FC = () => {
  const { isLoading } = useAuth();

  return (
    <Loader isLoading={isLoading}>
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<LoginContainer />} />
          <Route path="/signup" element={<RegisterContainer />} />
          <Route
            path="/tasks"
            element={
              <ProtectedRoute redirectPath="/signin">
                <TasksContainer />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </Loader>
  );
};

export default AppRoutes;
