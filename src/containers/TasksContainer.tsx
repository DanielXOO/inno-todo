import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { DateCalendar, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import NavBar from '../components/ui/NavBar';
import {
  calendarBoxStyle,
  contextBox,
  mainBoxStyle,
  tasksBoxStyle
} from '../styles/containers/TasksContainer.styles';
import { useTasks } from '../firebase/tasks/TaskServiceProvider';
import { useSelector } from 'react-redux';
import type CurrentUser from '../models/user/CurrentUser';
import type Task from '../models/task/Task';
import TaskPreviewCard from '../components/ui/TaskPreviewCard';

const TasksContainer: React.FC = () => {
  const { getTaskByUserIdAndDate } = useTasks();
  const userId = useSelector((user: CurrentUser) => user.currentUserId);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [tasksList, setTasksList] = useState<JSX.Element[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  /* useEffect(() => {
    return onTaskSnapshot(setTasks, userId ?? '');
  }); */

  useEffect(() => {
    const loadTasks = async (): Promise<void> => {
      const tasksResponse = await getTaskByUserIdAndDate(
        userId ?? '',
        selectedDate ?? new Date()
      );
      setTasks(tasksResponse);
    };

    loadTasks().catch((err) => {
      console.error(err);
    });
  }, [selectedDate]);

  useEffect(() => {
    setTasksList(() => {
      return tasks.map((task) => {
        return <TaskPreviewCard key={task.id} task={task} />;
      });
    });
  }, [JSON.stringify(tasks)]);

  return (
    <Box sx={mainBoxStyle}>
      <Box sx={{ minHeight: '10%' }}>
        <NavBar />
      </Box>
      <Box sx={contextBox}>
        <Box sx={calendarBoxStyle}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar
              sx={{ margin: '20px' }}
              onChange={(date: Date | null) => {
                setSelectedDate(date);
              }}
            />
          </LocalizationProvider>
        </Box>
        <Box sx={tasksBoxStyle}>{tasksList}</Box>
      </Box>
    </Box>
  );
};

export default TasksContainer;
