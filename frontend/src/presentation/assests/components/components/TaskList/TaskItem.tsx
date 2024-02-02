import React from 'react';
import { Task } from '../../../../../domain/interface/task';

interface TaskItemProps {
  task: Task;
  onToggleComplete: () => void;
  onDeleteTask: () => void;
}

const TaskItem = ({ task, onToggleComplete, onDeleteTask }: TaskItemProps) => {
  return (
    <div className={`rounded-md p-4 bg-white shadow-md my-2 transition duration-300 ease-in-out hover:bg-blue-50 cursor-pointer ${
      task.completed ? 'bg-blue-100' : ''
    }`}
    onClick={onToggleComplete}
    
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center"
       
        >
        <input
            type="checkbox"
            checked={task.completed}
            onChange={onToggleComplete}
            className="mr-2 rounded-full border-gray-300 focus:outline-none focus:border-blue-300"
            style={{ width: '15px', height: '15px' }}
          />
          <span className={`text-lg ${task.completed ? 'line-through text-gray-500' : 'text-black'}`}>
            {task.description}
          </span>
        </div>
        <button
          onClick={onDeleteTask}
          className="text-red-600  hover:text-red-800 focus:outline-none"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
