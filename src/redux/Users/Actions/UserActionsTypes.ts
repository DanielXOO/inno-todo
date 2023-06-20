export const enum UserActionsTypes {
  setCurrentUser = 'setCurrentUser',
  removeCurrentUser = 'removeCurrentUser'
}

export interface ActionWithPayload<Type extends UserActionsTypes, Payload> {
  type: Type;
  payload?: Payload;
}
