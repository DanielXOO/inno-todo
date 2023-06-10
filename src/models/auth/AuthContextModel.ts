import { type Auth, type UserCredential } from 'firebase/auth';

export default interface AuthContextModel {
  auth: Auth;
  signIn: (email: string, password: string) => Promise<UserCredential>;
  signUp: (email: string, password: string) => Promise<UserCredential>;
  signOut: () => Promise<void>;
  isLoading: boolean;
}
