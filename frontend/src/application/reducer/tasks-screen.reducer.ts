import { createAsyncThunk } from '@reduxjs/toolkit';
import { deleteTask, fetchAllTasks, updateTask } from '../../infrastructure/api/task.api';
import { Task } from '../../domain/interface/task';

export const fetchUserTasksThunk = createAsyncThunk<
  Task[]
>('taskScreen/fetchTasks', async () => {
  try {
    const response = await fetchAllTasks();
    return response;
  } catch (err: any) {
    throw err;
  }
});

export const updateUserTaskThunk = createAsyncThunk<Task, { taskId: string, updatedTask: Task }>(
  'taskScreen/updateTask',
  async ({ taskId, updatedTask }) => {
    try {
      const response = await updateTask(taskId, updatedTask);
      return response;
    } catch (err: any) {
      throw err;
    }
  }
);

export const deleteUserTaskThunk = createAsyncThunk<void, string>(
  'taskScreen/deleteTask',
  async (taskId) => {
    try {
      await deleteTask(taskId);
    } catch (err: any) {
      throw err;
    }
  }
);



