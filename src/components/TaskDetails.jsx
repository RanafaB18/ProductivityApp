import { motion } from "framer-motion";
import Proptypes from "prop-types";
import CancelIcon from "./CancelIcon";
import { priorityToColorMapping, priorityToHexMapping } from "../../constants";
import { useContext, useState } from "react";
import ModalPriority from "./ModalPriority";
import { DataContext } from "../context/DataContext";
import sound from "../assets/water-droplet.mp3";
import AddTask from "./AddTask";

const variant = {
  hidden: { height: 0 },
  visible: {
    height: 500,
    transition: {
      duration: 0.3,
    },
  },
  exit: {
    translateY: 100,
    opacity: 0,
    transition: { duration: 0.3 },
  },
};

const TaskDetails = ({ task }) => {
  const [editTask, setEditTask] = useState(task);
  const { setTasks, setModalData } = useContext(DataContext);

  console.log("Clicked Task", task);
  console.log("Editing task", editTask);

  function editFormHandler(event) {
    const { name, value } = event.target;
    setEditTask((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  }

  function completeAndRemoveHandler(event) {
    event.stopPropagation();
    const audio = new Audio(sound);
    audio.play();
    setTimeout(() => {
      setTasks((prevTasks) => {
        return prevTasks.filter((task) => task.id !== editTask.id);
      });
    }, 150);
    setModalData((prevData) => ({
      ...prevData,
      visible: false,
    }));
  }

  function cancelEditHandler() {
    setEditTask(task);
  }

  function closeModalHandler() {
    setModalData((prevData) => ({
      ...prevData,
      visible: false,
    }));
    setTasks((prevTasks) => {
      return prevTasks.map((taskItem) => {
        if (taskItem.id === editTask.id) {
          return editTask;
        } else {
          return taskItem;
        }
      });
    });
  }
  return (
    <motion.section
      variants={variant}
      initial={"hidden"}
      animate={"visible"}
      exit={"exit"}
      className="absolute bottom-0 left-0 h-96 w-screen rounded-t-3xl bg-white flex flex-col "
    >
      <div className="flex items-center justify-end p-2 px-5">
        <button
          type="button"
          className="hover:bg-[#f5f5f5] rounded-md p-1"
          onClick={closeModalHandler}
        >
          <CancelIcon />
        </button>
      </div>
      <motion.article
        layout
        className="flex justify-evenly cursor-pointer items-start py-3 min-h-[80px] group"
        //   onClick={openDetailsHandler}
      >
        <motion.button
          whileTap={{
            scale: 1.3,
            backgroundColor: priorityToHexMapping[editTask.priority],
          }}
          onClick={completeAndRemoveHandler}
          className={`border bg-white ${
            priorityToColorMapping[editTask.priority]
          } bg-opacity-25 group transition-opacity duration-500 cursor-pointer rounded-full h-fit p-1 mt-4`}
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
        <form className="focus-within:border-2 rounded-lg p-3 w-full flex flex-col gap-4 max-w-sm">
          <input
            type="text"
            className="peer outline-none text-xl font-semibold overflow-hidden whitespace-nowrap text-ellipsis"
            name="name"
            value={editTask.name}
            onChange={editFormHandler}
          />
          <input
            type="text"
            placeholder="Description"
            className="peer outline-none opacity-70 overflow-hidden whitespace-nowrap text-ellipsis"
            name="description"
            value={editTask.description}
            onChange={editFormHandler}
          />
          <div className="peer-focus:flex hidden justify-end gap-2">
            <button
              type="button"
              onClick={cancelEditHandler}
              className="bg-[#f5f5f5] hover:bg-gray-300  rounded-md py-1 px-3 text-sm font-semibold"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={!editTask.name}
              className={`${
                !editTask.name && "cursor-no-drop opacity-60"
              } bg-[#dc4c3e] hover:bg-red-600 rounded-md py-1 px-3 text-sm font-semibold text-white`}
            >
              Save
            </button>
          </div>
        </form>
      </motion.article>
      <ModalPriority setTask={setEditTask} taskPriority={editTask.priority} />
      <AddTask />
    </motion.section>
  );
};

TaskDetails.propTypes = {
  task: Proptypes.object,
};
export default TaskDetails;
