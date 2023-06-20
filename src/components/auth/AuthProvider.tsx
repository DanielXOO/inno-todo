import React, { type ReactNode, useContext, useEffect, useState } from 'react';
import type AuthContextModel from '../../models/auth/AuthContextModel';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  type UserCredential
} from 'firebase/auth';
import { auth } from '../../firebase/core/Firebase';
import { useDispatch } from 'react-redux';
import {
  removeCurrentUser,
  setCurrentUser
} from '../../redux/Users/Actions/UserActions';

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
  signOut,
  isLoading: true
});

export interface AuthProviderProps {
  children?: ReactNode;
}

export const useAuth = (): AuthContextModel => useContext(AuthContext);

export const AuthProvider: React.FC<AuthProviderProps> = (props) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    return auth.onAuthStateChanged((user) => {
      if (user === null) {
        dispatch(removeCurrentUser());
      } else {
        dispatch(setCurrentUser(user.uid));
      }
      setIsLoading(false);
    });
  }, [auth.currentUser]);

  const values = {
    signIn,
    signUp,
    signOut,
    auth,
    isLoading
  };

  return (
    <AuthContext.Provider value={values}>{props.children}</AuthContext.Provider>
  );
};
