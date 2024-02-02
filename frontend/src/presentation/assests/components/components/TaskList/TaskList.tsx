import React from 'react'
import { Task } from '../../../../../domain/interface/task';
import TaskItem from './TaskItem';

interface TaskListProps {
    tasks: Task[];
    onToggleComplete: (taskId: string) => void;
    onDeleteTask: (taskId: string) => void;
}

const TaskList = ({ tasks, onToggleComplete, onDeleteTask }:TaskListProps) => {
  return (
    <div>
     <div className="mt-4">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggleComplete={() => onToggleComplete(task.id)}
          onDeleteTask={() => onDeleteTask(task.id)}
        />
      ))}
    </div>
    </div>
  )
}

export default TaskList;
