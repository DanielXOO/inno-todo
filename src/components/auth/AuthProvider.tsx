import React, { type ReactNode, useContext, useEffect } from 'react';
import type AuthContextState from '../../models/auth/AuthContextState';
import type AuthContextModel from '../../models/auth/AuthContextModel';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  type UserCredential
} from 'firebase/auth';
import { auth } from '../../firebase/Firebase';

export const AuthStateContext = React.createContext<AuthContextState>({
  isAuthenticated: false,
  isLoading: false
});

const signIn = async (
  email: string,
  password: string
): Promise<UserCredential> =>
  await signInWithEmailAndPassword(auth, email, password);

const signUp = async (
  email: string,
  password: string
): Promise<UserCredential> =>
  await createUserWithEmailAndPassword(auth, email, password);

const signOut = async (): Promise<void> => {
  await auth.signOut();
};

export const AuthContext = React.createContext<AuthContextModel>({
  auth,
  signIn,
  signUp,
  signOut
});

export interface AuthProviderProps {
  children?: ReactNode;
}

export const useAuth = (): AuthContextModel => useContext(AuthContext);

export const AuthProvider: React.FC<AuthProviderProps> = (props) => {
  const userContext = useUserContext();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      userContext.id = user?.uid;
      userContext.isLoading = false;
      userContext.isAuthenticated = user !== null;
    });

    return unsubscribe;
  });

  const values = {
    signIn,
    signUp,
    signOut,
    auth
  };

  return (
    <AuthContext.Provider value={values}>{props.children}</AuthContext.Provider>
  );
};

export const useUserContext = (): AuthContextState =>
  useContext(AuthStateContext);
