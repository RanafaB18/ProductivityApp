import { useState } from "react";
import TaskForm from "./TaskForm";
import { motion } from "framer-motion";
const AddTask = () => {
    const [showTaskForm, setShowTaskForm] = useState(false)
    function openTaskFormHandler(){
        setShowTaskForm(true)
    }
    function closeFormHandler() {
      setShowTaskForm(false)
    }
  return (
    <>
    <motion.div layout className="relative">
    <button onClick={openTaskFormHandler} className="group flex items-center w-full gap-3 py-2 hover:text-red-600 ">
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
    </motion.div>
    {showTaskForm && <TaskForm onCloseForm={closeFormHandler}/>}
    </>
  );
};

export default AddTask;
