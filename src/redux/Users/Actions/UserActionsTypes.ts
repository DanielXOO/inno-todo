export const enum UserActionsTypes {
  setCurrentUser = 'setCurrentUser',
  removeCurrentUser = 'removeCurrentUser'
}

export interface UserActionWithPayload<Type extends UserActionsTypes, Payload> {
  type: Type;
  payload?: Payload;
}
