export enum TaskActionsTypes {
  getTaskById = 'getTaskById',
  getTaskByIdSuccess = 'getTaskByIdSuccess',
  getTaskByIdFailure = 'getTaskByIdFailure',
  getTasksByUserIdAndDate = 'getTasksByUserIdAndDate',
  getTasksByUserIdAndDateSuccess = 'getTasksByUserIdAndDateSuccess',
  getTasksByUserIdAndDateFailure = 'getTasksByUserIdAndDateFailure',
  deleteTaskById = 'deleteTaskById',
  deleteTaskByIdSuccess = 'deleteTaskByIdSuccess',
  deleteTaskByIdFailure = 'deleteTaskByIdFailure'
}

export interface TaskActionWithPayload<Type extends TaskActionsTypes, Payload> {
  type: Type;
  payload?: Payload;
}
