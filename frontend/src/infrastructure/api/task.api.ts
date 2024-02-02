import axios from "axios";
import { Task, baseTask, } from "../../domain/interface/task";

export const fetchAllTasks = async ()
:Promise<Task[]> => {
    try {
      const res = await fetch(
        `http://localhost:8080/api/tasks`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      ).then((res) => res.json());
      return res;

    } catch (error) {
      throw error ;
    }
};

export const addTask = async (newTask: baseTask): Promise<Task> => {
    try {
      const res = await axios.post(
        `http://localhost:8080/api/tasks`,
        newTask,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      return res.data;
    } catch (error) {
      throw error;
    }
  };

  export const updateTask = async (taskId: string, updatedTask: Task): Promise<Task> => {
    try {
      const res = await axios.patch(
        `http://localhost:8080/api/tasks/${taskId}`,
        updatedTask,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      return res.data;
    } catch (error) {
      throw error;
    }
  };
  
  export const deleteTask = async (taskId: string): Promise<void> => {
    try {
      await axios.delete(`http://localhost:8080/api/tasks/${taskId}`);
    } catch (error) {
      throw error;
    }
  };