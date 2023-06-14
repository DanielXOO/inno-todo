import React from 'react';
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

const TasksContainer: React.FC = () => {
  return (
    <Box sx={mainBoxStyle}>
      <Box sx={{ minHeight: '10%' }}>
        <NavBar />
      </Box>
      <Box sx={contextBox}>
        <Box sx={calendarBoxStyle}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar sx={{ margin: '20px' }} />
          </LocalizationProvider>
        </Box>
        <Box sx={tasksBoxStyle}></Box>
      </Box>
    </Box>
  );
};

export default TasksContainer;
