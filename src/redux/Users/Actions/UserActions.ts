import {
  type UserActionWithPayload,
  UserActionsTypes
} from './UserActionsTypes';

export const setCurrentUser = (
  userId: string
): UserActionWithPayload<UserActionsTypes, string> => ({
  type: UserActionsTypes.setCurrentUser,
  payload: userId
});

export const removeCurrentUser = (): UserActionWithPayload<
  UserActionsTypes,
  string
> => ({
  type: UserActionsTypes.removeCurrentUser
});
