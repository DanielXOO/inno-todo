import React, { type ReactNode, useContext } from 'react';
import { fireStore } from '../core/Firebase';
import type Task from '../../models/task/Task';
import {
  collection,
  getDocs,
  limit,
  query,
  where,
  orderBy
} from 'firebase/firestore';
import type TaskContextModel from '../../models/task/TaskContextModel';

const getById = async (id: string): Promise<Task> => {
  const collectionRef = collection(fireStore, 'tasks');
  const firebaseQuery = query(collectionRef, where('id', '==', id), limit(1));
  const documentsData = await getDocs(firebaseQuery);

  return documentsData.docs[0].data() as Task;
};

const getByUserIdAndDate = async (id: string, date: Date): Promise<Task[]> => {
  const collectionRef = collection(fireStore, 'tasks');

  date = new Date(date);
  const startOfToday = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate()
  );
  const endOfToday = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate() + 1
  );

  const firebaseQuery = query(
    collectionRef,
    where('userId', '==', id),
    where('date', '>=', startOfToday),
    where('date', '<', endOfToday),
    orderBy('date')
  );
  const documentsData = await getDocs(firebaseQuery);

  let tasks: Task[] = [];
  documentsData.forEach((documentData) => {
    tasks = [...tasks, documentData.data() as Task];
  });

  return tasks;
};

export const TaskContext = React.createContext<TaskContextModel>({
  getById,
  getByUserIdAndDate
});

export const useTasks = (): TaskContextModel => useContext(TaskContext);

export interface TasksProviderProps {
  children?: ReactNode;
}

export const TasksProvider: React.FC<TasksProviderProps> = (props) => {
  const values = {
    getById,
    getByUserIdAndDate
  };

  return (
    <TaskContext.Provider value={values}>{props.children}</TaskContext.Provider>
  );
};
