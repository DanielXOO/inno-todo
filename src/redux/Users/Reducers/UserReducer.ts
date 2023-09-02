import type CurrentUser from '../../../models/user/CurrentUser';
import {
  type UserActionWithPayload,
  UserActionsTypes
} from '../Actions/UserActionsTypes';

const initState: CurrentUser = {
  currentUserId: null,
  isAuthenticated: false
};

type UserAction = UserActionWithPayload<UserActionsTypes, string>;

export const UserReducer = (
  user: CurrentUser = initState,
  action: UserAction
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
