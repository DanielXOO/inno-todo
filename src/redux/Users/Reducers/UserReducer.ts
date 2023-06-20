import type CurrentUser from '../../../models/user/CurrentUser';
import {
  type ActionWithPayload,
  UserActionsTypes
} from '../Actions/UserActionsTypes';

const initUser: CurrentUser = {
  currentUserId: null,
  isAuthenticated: false
};

type UserActionWithPayload = ActionWithPayload<UserActionsTypes, string>;

export const UserReducer = (
  user: CurrentUser = initUser,
  action: UserActionWithPayload
): CurrentUser => {
  switch (action.type) {
    case UserActionsTypes.setCurrentUser:
      return { ...user, isAuthenticated: true, currentUserId: action.payload };
    case UserActionsTypes.removeCurrentUser:
      return { ...user, isAuthenticated: false, currentUserId: null };
    default:
      return user;
  }
};
