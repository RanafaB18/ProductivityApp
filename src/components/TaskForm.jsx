import CancelIcon from "./CancelIcon";
import PropTypes from "prop-types";
import SendIcon from "./SendIcon";
import PriorityList from "./PriorityList";
import { Tooltip } from "react-tooltip";
import { useContext, useState } from "react";
import { DataContext } from "../context/DataContext";
import { v4 as uuid } from "uuid";
import { motion } from "framer-motion";
import { addTask } from "../services/crud";
const TaskForm = ({ onCloseForm, todo }) => {
  const { setTasks } = useContext(DataContext);
  const [task, setTask] = useState(
    todo ?? {
      id: "",
      name: "",
      description: "",
      subtasks: [],
      priority: "P4",
    }
  );
  const id = uuid();

  function formUpdateHandler(event) {
    const { name, value } = event.target;
    setTask((prevFormData) => ({
      ...prevFormData,
      [name]: value,
      id,
    }));
  }
  async function submitFormHandler(event) {
    event.preventDefault();
    console.log("Form Data", task);

    if (todo) {
      // is editing a task
      setTasks((prevTasks) => {
        return prevTasks.map((taskItem) => {
          if (taskItem.id === todo.id) {
            return task
          } else {
            return taskItem
          }
        })
      })
    } else {
      // creating new task
      setTasks((prevTasks) => {
        return [...prevTasks, task];
      });
    }
    onCloseForm()
    const response = await addTask(task)
    console.log("Adding tasks", response.data);
  }
  return (
    <motion.div
      layout
      className="bg-white shadow-lg border p-2 px-3 w-full rounded-lg"
    >
      <form className="flex flex-col" onSubmit={submitFormHandler}>
        <input
          type="text"
          className="outline-none placeholder:font-semibold font-semibold mb-5"
          placeholder="Task name"
          name="name"
          value={task.name}
          onChange={formUpdateHandler}
        />
        <textarea
          className="outline-none placeholder:text-xs"
          placeholder="Description"
          name="description"
          value={task.description}
          onChange={formUpdateHandler}
        />
        <Tooltip noArrow id="priorities" className="!p-1 !px-2" />
        <div
          data-tooltip-offset={2}
          data-tooltip-content={"Set priority p1, p2, p3, p4"}
          data-tooltip-id="priorities"
          className="w-fit"
        >
          <PriorityList setTask={setTask} taskPriority={todo?.priority || task.priority}/>
        </div>
        <div className="flex justify-end gap-2">
          <Tooltip noArrow id="cancel" className="!p-1 !px-2" />
          <Tooltip noArrow id="send" className="!p-1 !px-2" />
          <button
            type="button"
            data-tooltip-offset={2}
            data-tooltip-id="cancel"
            data-tooltip-content={"Cancel"}
            onClick={onCloseForm}
            className="bg-[#f5f5f5] hover:bg-gray-300  rounded-md p-1"
          >
            <CancelIcon />
          </button>
          <button
            data-tooltip-offset={2}
            data-tooltip-content={"Add task"}
            data-tooltip-id="send"
            type="submit"
            disabled={!task.name}
            className={`${
              !task.name && "cursor-no-drop opacity-60"
            } bg-[#dc4c3e] hover:bg-red-600 rounded-md p-1`}
          >
            <SendIcon />
          </button>
        </div>
      </form>
    </motion.div>
  );
};

TaskForm.propTypes = {
  onCloseForm: PropTypes.func,
  todo: PropTypes.object,
  isEditing: PropTypes.bool
};
export default TaskForm;
