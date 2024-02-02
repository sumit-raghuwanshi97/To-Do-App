import React from 'react'
import { Task } from '../../../../../domain/interface/task';


interface TaskItemProps {
    task: Task;
    onToggleComplete: () => void;
    onDeleteTask: () => void;
}

const TaskItem = ({ task, onToggleComplete, onDeleteTask } : TaskItemProps) => {
  return (
    <div>
      <div className={`flex items-center justify-between p-2 border ${task.completed ? 'bg-gray-200' : ''}`}>
      <div>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={onToggleComplete}
          className="mr-2"
        />
        <span className={task.completed ? 'line-through' : ''}>{task.description}</span>
      </div>
      <button onClick={onDeleteTask} className="text-red-600 hover:text-red-800 focus:outline-none">
        Delete
      </button>
    </div>
    </div>
  )
}

export default TaskItem;
