import React from 'react';
import { AuthProvider } from './components/auth/AuthProvider';
import { Provider } from 'react-redux';
import { Store } from './redux/store';
import AppRoutes from './components/router/AppRoutes';

const App: React.FC = () => {
  return (
    <Provider store={Store}>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </Provider>
  );
};

export default App;
