import React, { useEffect, useState } from 'react'
import { Task } from '../../../../domain/interface/task';
import TaskList from '../components/TaskList/TaskList';
import axios from 'axios';
  

const TaskScreen = () => {

  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/tasks');
        setTasks(response.data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, []);


    const handleToggleComplete = (taskId: string) => {
        console.log(`Toggle completion status for task with ID ${taskId}`);
      };
    
      const handleDeleteTask = (taskId: string) => {
        console.log(`Delete task with ID ${taskId}`);
      };

  return (
    <div>
       <TaskList tasks={tasks} onToggleComplete={handleToggleComplete} onDeleteTask={handleDeleteTask} />
    </div>
  )
}

export default TaskScreen;
