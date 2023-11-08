import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import sound from "../assets/water-droplet.mp3";
const TaskItem = ({ task }) => {
  const priorityToColorMapping = {
    P1: "border-red-600 bg-red-500 hover:bg-red-200 text-red-600",
    P2: "border-orange-600 bg-orange-500 hover:bg-orange-200 text-orange-500",
    P3: "border-blue-600 bg-blue-500 hover:bg-blue-200 text-blue-500",
    P4: "hover:bg-gray-200",
  };
  const priorityToHexMapping = {
    P1: "#dc4c3e",
    P2: "#ec9018",
    P3: "#2872e0",
    P4: "#a7a7a7",
  };
  const { setTasks } = useContext(DataContext);
  const { taskName, description, priority, id } = task;
  console.log("priority", priority);
  function completeAndRemoveHandler() {
    const audio = new Audio(sound);
    audio.play();
    setTimeout(() => {
      setTasks((prevTasks) => {
        return prevTasks.filter((task) => task.id !== id);
      });
    }, 150);
  }

  return (
    <article className="flex items-start gap-3 py-3 min-h-[80px]">
      <motion.button
        whileTap={{
          scale: 1.3,
          backgroundColor: priorityToHexMapping[priority],
        }}
        onClick={completeAndRemoveHandler}
        className={`border bg-white ${priorityToColorMapping[priority]} bg-opacity-25 group transition-opacity duration-500 cursor-pointer rounded-full h-fit p-1 mt-0.5`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`w-3 h-3 rotate-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 12.75l6 6 9-13.5"
          />
        </svg>
      </motion.button>
      <div className="flex flex-col gap-1 max-w-sm">
        <p className="text-sm overflow-hidden whitespace-nowrap text-ellipsis">
          {taskName}
        </p>
        <p className="text-xs opacity-70 overflow-hidden whitespace-nowrap text-ellipsis">
          {description}
        </p>
      </div>
    </article>
  );
};

TaskItem.propTypes = {
  task: PropTypes.object,
};
export default TaskItem;
