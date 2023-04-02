import type User from './User';

export default interface UserSignUp extends User {
  repeatPassword?: string;
}
