import React, { useState } from 'react'

const TaskFrom = () => {

    const [newTask, setNewTask] = useState<string>('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setNewTask(event.target.value);
    };
    
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setNewTask('');
    };
    
  return (
    <form onSubmit={handleSubmit} className="mt-4">
    <div className="flex">
      <input
        type="text"
        placeholder="Add a new task..."
        value={newTask}
        onChange={handleInputChange}
        className="flex-1 p-2 border border-gray-300 rounded-l focus:outline-none"
      />
      <button type="submit" className="bg-green-500 text-white p-2 rounded-r hover:bg-green-600 focus:outline-none">
        Add
      </button>
    </div>
  </form>
  )
}

export default TaskFrom
