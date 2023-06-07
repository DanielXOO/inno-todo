import { type Action } from 'redux';
import { UserActionsTypes } from './UserActionsTypes';

export const setCurrentUser = (): Action => ({
  type: UserActionsTypes.setCurrentUser
});

export const removeCurrentUser = (): Action => ({
  type: UserActionsTypes.removeCurrentUser
});
