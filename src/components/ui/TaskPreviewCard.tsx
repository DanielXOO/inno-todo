import React from 'react';
import type Task from '../../models/task/Task';
import { Box, Typography } from '@mui/material';
import { taskPreviewCardStyle } from '../../styles/components/TaskPreviewCard.styles';

interface TaskPreviewCardProps {
  task: Task;
}

const TaskPreviewCard: React.FC<TaskPreviewCardProps> = ({ task }) => {
  return (
    <Box sx={taskPreviewCardStyle}>
      <Typography variant="h5" align="center">
        {task.title}
      </Typography>
      <Typography variant="body2" align="left" pt="10px">
        {task.description.length <= 200
          ? task.description
          : task.description.slice(0, 200) + '...'}
      </Typography>
    </Box>
  );
};

export default TaskPreviewCard;
