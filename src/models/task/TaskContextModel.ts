import type Task from './Task';

interface TaskContextModel {
  getById: (id: string) => Promise<Task>;
  getByUserId: (id: string) => Promise<Task>;
  create: (task: Task) => Promise<Task>;
  update: (task: Task) => Promise<Task>;
  delete: (id: string) => Promise<Task>;
}

export default TaskContextModel;
