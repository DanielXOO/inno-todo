import { type ActionWithPayload, UserActionsTypes } from './UserActionsTypes';

type UserActionWithPayload = ActionWithPayload<UserActionsTypes, string>;

export const setCurrentUser = (userId: string): UserActionWithPayload => ({
  type: UserActionsTypes.setCurrentUser,
  payload: userId
});

export const removeCurrentUser = (): UserActionWithPayload => ({
  type: UserActionsTypes.removeCurrentUser
});
