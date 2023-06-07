import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginForm from './containers/LoginForm';
import { AuthProvider } from './components/auth/AuthProvider';
import ProtectedRoute from './components/router/ProtectedRoute';
import RegisterForm from './containers/RegisterForm';
import { Provider } from 'react-redux';
import { Store } from './redux/store';

const App: React.FC = () => {
  return (
    <Provider store={Store}>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/signin" element={<LoginForm />} />
            <Route
              path="/signup"
              element={
                <ProtectedRoute redirectPath="/signin">
                  <RegisterForm />
                </ProtectedRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </Provider>
  );
};

export default App;
