import React, { type ReactNode, useContext, useEffect, useState } from 'react';
import type AuthContextState from '../models/auth/AuthContextState';
import type AuthContextModel from '../models/auth/AuthContextModel';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  type User,
  type UserCredential
} from 'firebase/auth';
import { auth } from '../firebase/Firebase';

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

export const AuthContext = React.createContext<AuthContextModel>({
  auth,
  user: null,
  signIn,
  signUp
});

export interface AuthProviderProps {
  children?: ReactNode;
}

export const useAuth = (): AuthContextModel => useContext(AuthContext);

export const AuthProvider: React.FC<AuthProviderProps> = (props) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return unsubscribe;
  });

  const values = {
    signIn,
    signUp,
    user,
    auth
  };

  return (
    <AuthContext.Provider value={values}>{props.children}</AuthContext.Provider>
  );
};

export const useUserContext = (): AuthContextState =>
  useContext(AuthStateContext);
