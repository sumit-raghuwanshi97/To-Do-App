import React from 'react'
import { Task } from '../../../../domain/interface/task';
import TaskList from '../components/TaskList/TaskList';

const sampleTasks: Task[] = [
    { id: 1, description: 'Complete assignment', completed: false },
    { id: 2, description: 'Read a book', completed: true },
    { id: 3, description: 'Go for a run', completed: false },
];
  

const TaskScreen = () => {
    const handleToggleComplete = (taskId: number) => {
        console.log(`Toggle completion status for task with ID ${taskId}`);
      };
    
      const handleDeleteTask = (taskId: number) => {
        console.log(`Delete task with ID ${taskId}`);
      };

  return (
    <div>
       <TaskList tasks={sampleTasks} onToggleComplete={handleToggleComplete} onDeleteTask={handleDeleteTask} />
    </div>
  )
}

export default TaskScreen;
