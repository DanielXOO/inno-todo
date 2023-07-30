import type Task from './Task';
import type React from 'react';
import firebase from 'firebase/compat/app';
import Unsubscribe = firebase.Unsubscribe;

interface TaskContextModel {
  getTaskById: (id: string) => Promise<Task>;
  getTaskByUserIdAndDate: (id: string, date: Date) => Promise<Task[]>;
  deleteTaskById: (id: string) => Promise<void>;
  onTaskSnapshot: (
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>,
    userId: string
  ) => Unsubscribe;
}

export default TaskContextModel;
