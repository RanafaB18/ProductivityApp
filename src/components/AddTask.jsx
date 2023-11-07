import { useState } from "react";
import TaskForm from "./TaskForm";

const AddTask = () => {
    const [showTaskForm, setShowTaskForm] = useState(false)
    function openTaskFormHandler(){
        setShowTaskForm(true)
    }
    function closeTaskFormHandler(){
        setShowTaskForm(false)
    }
  return (
    <div className="relative">
    <button onClick={openTaskFormHandler} className="group flex items-center gap-3 p-2 hover:text-red-600 ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-5 h-5 text-red-600 group-hover:border group-hover:bg-red-400 group-hover:text-white group-hover:rounded-full "
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 4.5v15m7.5-7.5h-15"
        />
      </svg>
      <p className="group-hover:opacity-100 opacity-60">Add task</p>
    </button>
    {showTaskForm && <TaskForm onCloseForm={closeTaskFormHandler}/>}
    </div>
  );
};

export default AddTask;
