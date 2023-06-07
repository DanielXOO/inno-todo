import type CurrentUser from '../../../models/user/CurrentUser';
import { UserActionsTypes } from '../Actions/UserActionsTypes';
import { type Action } from 'redux';

const initUser: CurrentUser = {
  isAuthenticated: false
};

export const UserReducer = (
  user: CurrentUser = initUser,
  action: Action
): CurrentUser => {
  switch (action.type) {
    case UserActionsTypes.setCurrentUser:
      return { ...user, isAuthenticated: true };
    case UserActionsTypes.removeCurrentUser:
      return { ...user, isAuthenticated: false };
    default:
      return user;
  }
};
