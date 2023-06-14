interface Task {
  id: string;
  userId: string;
  date: Date;
  title: string;
  description: string;
  isDone: boolean;
}

export default Task;
