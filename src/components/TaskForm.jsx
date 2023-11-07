import CancelIcon from "./CancelIcon";
import PropTypes from "prop-types";
import SendIcon from "./SendIcon";
import PriorityList from "./PriorityList";
import { Tooltip } from "react-tooltip";
import { useState } from "react";
const TaskForm = ({ onCloseForm }) => {
  const [task, setTask] = useState({
    taskName: "",
    description: "",
    subtasks: [],
    priority: "P4",
  });

  function formUpdateHandler() {
    const { name, value } = event.target;

    setTask((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  function submitFormHandler(event) {
    event.preventDefault();
    console.log("Form Data", task);
  }
  return (
    <div className="absolute top-1 bg-white shadow-lg border p-2 px-3 w-full rounded-lg">
      <form className="flex flex-col" onSubmit={submitFormHandler}>
        <input
          type="text"
          className="outline-none placeholder:font-semibold mb-5"
          placeholder="Task name"
          name="taskName"
          value={task.taskName}
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
          <PriorityList setTask={setTask}/>
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
            data-tooltip-content={"Send"}
            data-tooltip-id="send"
            type="submit"
            className="bg-[#dc4c3e] hover:bg-red-600 rounded-md p-1"
          >
            <SendIcon />
          </button>
        </div>
      </form>
    </div>
  );
};

TaskForm.propTypes = {
  onCloseForm: PropTypes.func,
};
export default TaskForm;
