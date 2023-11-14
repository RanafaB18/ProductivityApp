import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { useContext, useState } from "react";
import { DataContext } from "../context/DataContext";
import { Tooltip } from "react-tooltip";
import sound from "../assets/water-droplet.mp3";
import EditIcon from "./EditIcon";
import TaskForm from "./TaskForm";
import { completeTask, deleteTask } from "../services/crud";
import DeleteIcon from "./DeleteIcon";

// For some reason, it works only if its not being imported
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
const TaskItem = ({ task }) => {
  const { setTasks, setModalData, setShowSideBar } = useContext(DataContext);
  const { name, description, priority, id } = task;
  console.log("Priority", priority);
  const [isEditing, setIsEditing] = useState(false);
  async function completeAndRemoveHandler(event) {
    event.stopPropagation();
    const audio = new Audio(sound);
    audio.play();
    setTimeout(() => {
      setTasks((prevTasks) => {
        return prevTasks.filter((task) => task.id !== id);
      });
    }, 150);
    const response = await completeTask(id);
    console.log("Complete", response);
  }

  function openDetailsHandler(event) {
    event.stopPropagation();
    setModalData({ visible: true, task });
    setShowSideBar(false);
  }

  function editHandler(event) {
    event.stopPropagation();
    setIsEditing(true);
  }
  async function deleteHandler(event) {
    event.stopPropagation()
    setTasks((prevTasks) => {
      return prevTasks.filter((task) => task.id !== id);
    });
    const response = await deleteTask(id)
    console.log("Deleted", response);
  }
  function closeFormHandler() {
    setIsEditing(false);
  }
  return (
    <section className="relative">
      {isEditing ? (
        <TaskForm todo={task} onCloseForm={closeFormHandler} />
      ) : (
        <motion.article
          layout
          className="flex cursor-pointer items-start gap-3 py-3 min-h-[80px] group"
          onClick={openDetailsHandler}
        >
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
              {name}
            </p>
            <p className="text-xs opacity-70 overflow-hidden whitespace-nowrap text-ellipsis">
              {description}
            </p>
          </div>
          <div className="group-hover:flex gap-2 hidden absolute right-0 opacity-60 cursor-pointer">
            <Tooltip noArrow id="edit-task" className="!p-1 !px-2" />
            <button
              onClick={editHandler}
              data-tooltip-content={"Edit task"}
              data-tooltip-offset={2}
              data-tooltip-id="edit-task"
              className="hover:bg-gray-100"
            >
              <EditIcon />
            </button>
            <Tooltip noArrow id="delete-task" className="!p-1 !px-2" />
            <button
              onClick={deleteHandler}
              data-tooltip-content={"Delete task"}
              data-tooltip-offset={2}
              data-tooltip-id="delete-task"
              className="text-red-600 "
            >
              <DeleteIcon />
            </button>
          </div>
        </motion.article>
      )}
    </section>
  );
};

TaskItem.propTypes = {
  task: PropTypes.object,
  onShowModal: PropTypes.func,
};
export default TaskItem;
