import React from 'react';
import type Task from '../../models/task/Task';
import { Box, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { taskPreviewCardStyle } from '../../styles/components/TaskPreviewCard.styles';
import { useTasks } from '../../firebase/tasks/TaskServiceProvider';
import { Done, East } from '@mui/icons-material';

interface TaskPreviewCardProps {
  task: Task;
}

const TaskPreviewCard: React.FC<TaskPreviewCardProps> = ({ task }) => {
  const { deleteTaskById } = useTasks();
  return (
    <Box sx={taskPreviewCardStyle}>
      <Box
        sx={{
          height: '15%',
          textAlign: 'right',
          marginBottom: '5px',
          display: 'inline-flex',
          justifyContent: 'space-between'
        }}
      >
        <Typography sx={{ display: 'flex', alignItems: 'center' }} variant="h5">
          {task.title}
        </Typography>
        <IconButton
          onClick={async () => {
            await deleteTaskById(task.id);
          }}
          aria-label="close"
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      </Box>
      <Box sx={{ height: '65%' }}>
        <Typography variant="body2" align="left" pt="10px">
          {task.description.length <= 200
            ? task.description
            : task.description.slice(0, 200) + '...'}
        </Typography>
      </Box>
      <Box
        sx={{
          height: '20%',
          display: 'inline-flex',
          justifyContent: 'space-between'
        }}
      >
        <IconButton aria-label="done">
          <Done fontSize="small" sx={{ padding: '5px' }} />
        </IconButton>
        <IconButton aria-label="east">
          <East fontSize="small" sx={{ padding: '5px' }} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default TaskPreviewCard;
