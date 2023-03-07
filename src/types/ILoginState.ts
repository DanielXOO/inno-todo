import type React from 'react';

export interface ILoginState {
  login: string;
  setLogin: React.Dispatch<React.SetStateAction<string>>;
}
