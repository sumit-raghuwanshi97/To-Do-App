import React, { useState } from 'react';
import { addTask } from '../../../../../infrastructure/api/task.api';
import { fetchUserTasksThunk } from '../../../../../application/reducer/tasks-screen.reducer';
import { useAppDispatch } from '../../../../../application/store';

const TaskForm = () => {
  const [newTask, setNewTask] = useState<string>('');
  const [formVisible, setFormVisible] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await addTask({ description: newTask, completed: false })
      .then(() => {
        dispatch(fetchUserTasksThunk());
      })
      .catch((e) => console.log(e));

    setNewTask('');
  };

  const toggleFormVisibility = () => {
    setFormVisible(!formVisible);
  };

  return (
    <div className="block mt-4  justify-center items-center">
      <div className='w-full m-3 p-1 bg-blue-500 hover:bg-blue-600'
      onClick={toggleFormVisibility}
      >
      <button
        className="text-white p-2 rounded-md"
      >
        {formVisible ? 'Cancel' : 'Add New Task'}
      </button>
      </div>

      {formVisible && (
        <form onSubmit={handleSubmit} className="m-4">
          <div className="flex">
            <input
              type="text"
              placeholder="Enter task description"
              value={newTask}
              onChange={handleInputChange}
              className="flex-1 p-2 border border-gray-300 rounded-l focus:outline-none"
            />
            <button
              type="submit"
              className="bg-[#474F7A] text-white p-2 px-8 rounded-r hover:bg-[#1F2544] focus:outline-none"
            >
              Add
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default TaskForm;
