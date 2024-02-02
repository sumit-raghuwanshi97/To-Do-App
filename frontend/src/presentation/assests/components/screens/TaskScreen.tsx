import React, { useEffect } from 'react';
import { Task } from '../../../../domain/interface/task';
import TaskList from '../components/TaskList/TaskList';
import { useAppDispatch, useAppSelector } from '../../../../application/store';
import { deleteUserTaskThunk, fetchUserTasksThunk, updateUserTaskThunk } from '../../../../application/reducer/tasks-screen.reducer';

const TaskScreen: React.FC = () => {
  const dispatch = useAppDispatch();
  const tasks = useAppSelector((state) => state.taskScreen.tasks.data);

  useEffect(() => {
    // Dispatch the action to fetch tasks when the component mounts
    dispatch(fetchUserTasksThunk());
  }, [dispatch]);

  const handleToggleComplete = (taskId: string) => {
    console.log(`Toggle completion status for task with ID ${taskId}`);
    const taskToUpdate = tasks?.find(task => task.id === taskId);
    if (taskToUpdate) {
      const updatedTask = { ...taskToUpdate, completed: !taskToUpdate.completed };
      dispatch(updateUserTaskThunk({taskId,updatedTask}));
    }

  };

  const handleDeleteTask = (taskId: string) => {
    console.log(`Delete task with ID ${taskId}`);
    dispatch(deleteUserTaskThunk(taskId));
  };

  return (
    <div>
    { !tasks ? (
      <p>Loading tasks...</p>
    ) : (
      tasks && <TaskList tasks={tasks} onToggleComplete={handleToggleComplete} onDeleteTask={handleDeleteTask} />
    )}
  </div>
  );
};

export default TaskScreen;
