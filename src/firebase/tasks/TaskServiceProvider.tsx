import React, { type ReactNode, useContext } from 'react';
import { fireStore } from '../core/Firebase';
import type Task from '../../models/task/Task';
import {
  collection,
  deleteDoc,
  getDocs,
  limit,
  onSnapshot,
  orderBy,
  query,
  where
} from 'firebase/firestore';
import type TaskContextModel from '../../models/task/TaskContextModel';
import firebase from 'firebase/compat/app';
import Unsubscribe = firebase.Unsubscribe;

const getTaskById = async (id: string): Promise<Task> => {
  const collectionRef = collection(fireStore, 'tasks');
  const firebaseQuery = query(collectionRef, where('id', '==', id), limit(1));
  const documentsData = await getDocs(firebaseQuery);

  return documentsData.docs[0].data() as Task;
};

const deleteTaskById = async (id: string): Promise<void> => {
  const collectionRef = collection(fireStore, 'tasks');
  const firebaseQuery = query(collectionRef, where('id', '==', id), limit(1));
  const documentsData = await getDocs(firebaseQuery);
  await deleteDoc(documentsData.docs[0].ref);
};

const onTaskSnapshot = (
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>,
  userId: string
): Unsubscribe => {
  const currentUserQuery = query(
    collection(fireStore, 'tasks'),
    where('userId', '==', userId)
  );

  return onSnapshot(
    currentUserQuery,
    { includeMetadataChanges: true },
    (querySnapshot) => {
      const tasks: Task[] = [];
      querySnapshot.forEach((doc) => {
        tasks.push(doc.data() as Task);
      });
      setTasks(tasks);
    }
  );
};

const getTaskByUserIdAndDate = async (
  id: string,
  date: Date
): Promise<Task[]> => {
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
  getTaskById,
  getTaskByUserIdAndDate,
  deleteTaskById,
  onTaskSnapshot
});

export const useTasks = (): TaskContextModel => useContext(TaskContext);

export interface TasksProviderProps {
  children?: ReactNode;
}

export const TasksProvider: React.FC<TasksProviderProps> = (props) => {
  const values = {
    getTaskById,
    getTaskByUserIdAndDate,
    deleteTaskById,
    onTaskSnapshot
  };

  return (
    <TaskContext.Provider value={values}>{props.children}</TaskContext.Provider>
  );
};
