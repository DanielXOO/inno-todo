import type Task from '../../../models/task/Task';
import {
  type TaskActionWithPayload,
  TaskActionsTypes
} from './TaskActionsTypes';
import { type FirebaseError } from 'firebase/app';

export const getTaskById = (): TaskActionWithPayload<
  TaskActionsTypes,
  void
> => ({
  type: TaskActionsTypes.getTaskById
});

export const getTaskByIdSuccess = (
  data: Task
): TaskActionWithPayload<TaskActionsTypes, Task> => ({
  type: TaskActionsTypes.getTaskByIdSuccess,
  payload: data
});

export const getTaskByIdFailure = (
  error: FirebaseError
): TaskActionWithPayload<TaskActionsTypes, FirebaseError> => ({
  type: TaskActionsTypes.getTaskByIdFailure,
  payload: error
});

export const getTasksByUserIdAndDate = (): TaskActionWithPayload<
  TaskActionsTypes,
  void
> => ({
  type: TaskActionsTypes.getTasksByUserIdAndDate
});

export const getTasksByUserIdAndDateSuccess = (
  data: Task[]
): TaskActionWithPayload<TaskActionsTypes, Task[]> => ({
  type: TaskActionsTypes.getTasksByUserIdAndDateSuccess,
  payload: data
});

export const getTasksByUserIdAndDateFailure = (
  error: FirebaseError
): TaskActionWithPayload<TaskActionsTypes, FirebaseError> => ({
  type: TaskActionsTypes.getTasksByUserIdAndDateFailure,
  payload: error
});

export const deleteTaskById = (): TaskActionWithPayload<
  TaskActionsTypes,
  null
> => ({
  type: TaskActionsTypes.deleteTaskById
});

export const deleteTaskByIdSuccess = (): TaskActionWithPayload<
  TaskActionsTypes,
  null
> => ({
  type: TaskActionsTypes.deleteTaskByIdSuccess
});

export const deleteTaskByIdFailure = (
  error: FirebaseError
): TaskActionWithPayload<TaskActionsTypes, FirebaseError> => ({
  type: TaskActionsTypes.deleteTaskByIdFailure,
  payload: error
});
