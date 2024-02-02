import React, { useEffect } from 'react';
import { Task } from '../../../../domain/interface/task';
import TaskList from '../components/TaskList/TaskList';
import { useAppDispatch, useAppSelector } from '../../../../application/store';
import { fetchUserTasksThunk } from '../../../../application/reducer/tasks-screen.reducer';

const TaskScreen: React.FC = () => {
  const dispatch = useAppDispatch();
  const tasks = useAppSelector((state) => state.taskScreen.tasks.data);

  useEffect(() => {
    // Dispatch the action to fetch tasks when the component mounts
    dispatch(fetchUserTasksThunk());
  }, [dispatch]);

  const handleToggleComplete = (taskId: string) => {
    console.log(`Toggle completion status for task with ID ${taskId}`);
    // Dispatch the action to update the completion status
    // Example: dispatch(updateTaskCompletion(taskId, !completed));
  };

  const handleDeleteTask = (taskId: string) => {
    console.log(`Delete task with ID ${taskId}`);
    // Dispatch the action to delete the task
    // Example: dispatch(deleteTask(taskId));
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
