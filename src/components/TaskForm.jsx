import CancelIcon from "./CancelIcon";
import PropTypes from "prop-types"
import SendIcon from "./SendIcon";
import PriorityList from "./PriorityList";
const TaskForm = ({onCloseForm}) => {
  return (
    <div className="absolute top-1 bg-white shadow-lg border p-2 px-3 w-full rounded-lg">
      <form className="flex flex-col">
        <input
          type="text"
          className="outline-none placeholder:font-semibold mb-5"
          placeholder="Task name"
        />
        <textarea
          className="outline-none placeholder:text-xs"
          placeholder="Description"
        />
        <PriorityList />
        <div className="flex justify-end gap-2">
          <button type="button" onClick={onCloseForm} className="bg-[#f5f5f5] hover:bg-gray-300  rounded-md p-1">
            <CancelIcon />
          </button>
          <button type="submit" className="bg-[#dc4c3e] hover:bg-red-600 rounded-md p-1">
            <SendIcon />
          </button>
        </div>
      </form>
    </div>
  );
};

TaskForm.propTypes = {
    onCloseForm: PropTypes.func
}
export default TaskForm;
