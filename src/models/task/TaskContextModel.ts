import type Task from './Task';

interface TaskContextModel {
  getById: (id: string) => Promise<Task>;
  getByUserIdAndDate: (id: string, date: Date) => Promise<Task[]>;
}

export default TaskContextModel;
