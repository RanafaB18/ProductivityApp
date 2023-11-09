import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { useContext, useState } from "react";
import { DataContext } from "../context/DataContext";
import { Tooltip } from "react-tooltip";
import sound from "../assets/water-droplet.mp3";
import EditIcon from "./EditIcon";
import TaskForm from "./TaskForm";
import { todayDate } from "../../constants";
import { priorityToColorMapping, priorityToHexMapping } from "../../constants";
const TaskItem = ({ task }) => {
  const { setTasks, setModalData, setShowSideBar, setCalculations } = useContext(DataContext);
  const { taskName, description, priority, id } = task;
  const [isEditing, setIsEditing] = useState(false);
  function completeAndRemoveHandler(event) {
    event.stopPropagation();
    const audio = new Audio(sound);
    audio.play();
    setTimeout(() => {
      setTasks((prevTasks) => {
        return prevTasks.filter((task) => task.id !== id);
      });
    }, 150);
    setCalculations((prevState) => {
      return {
        ...prevState,
        [todayDate]: {
          numberOfTasks: prevState[todayDate].numberOfTasks,
          doneTasks: prevState[todayDate].doneTasks + 1
        }
      }
    })
  }

  function openDetailsHandler(event) {
    event.stopPropagation()
    setModalData({ visible: true, task });
    setShowSideBar(false)
  }

  function editHandler(event) {
    event.stopPropagation();
    setIsEditing(true);
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
              {taskName}
            </p>
            <p className="text-xs opacity-70 overflow-hidden whitespace-nowrap text-ellipsis">
              {description}
            </p>
          </div>
          <Tooltip noArrow id="edit-task" className="!p-1 !px-2" />
          <button
            onClick={editHandler}
            data-tooltip-content={"Edit task"}
            data-tooltip-offset={2}
            data-tooltip-id="edit-task"
            className="group-hover:flex hidden absolute right-0 opacity-60 cursor-pointer hover:bg-gray-100"
          >
            <EditIcon />
          </button>
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
