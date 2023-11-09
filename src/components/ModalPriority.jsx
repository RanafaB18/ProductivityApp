/* eslint-disable react/prop-types */
import Select, { components } from "react-select";
import flag4 from "../assets/flag4.svg";
import { useState } from "react";
const { Option } = components;
const IconOption = (props) => (
  <Option {...props}>
    <div className="flex items-center gap-2">
      <img loading="lazy" src={props.data.icon} className="w-5 h-5" alt={props.data.label} />
      <p className="text-sm">{props.data.label}</p>
    </div>
  </Option>
);

const SingleValue = ({ ...props }) => (
  <components.SingleValue {...props}>
    <div className="flex items-center gap-1">
      <img loading="lazy" src={props.data.icon} className="w-4 h-4" alt={props.data.label} />
      <p>{props.data.label}</p>
    </div>
  </components.SingleValue>
);

const options = [
  { value: "P1", label: "Priority 1", icon: "src/assets/flag1.svg" },
  { value: "P2", label: "Priority 2", icon: "src/assets/flag2.svg" },
  { value: "P3", label: "Priority 3", icon: "src/assets/flag3.svg" },
  { value: "P4", label: "Priority 4", icon: "src/assets/flag4.svg" },
];
const ModalPriority = ({ setTask, taskPriority }) => {
  const [currentPriority, setCurrentPriority] = useState(
    options.find((option) => option.value === taskPriority) || options[3]
  );
  function updatePriority(choice) {
    setTask((prevData) => ({
      ...prevData,
      priority: choice?.value || "P4",
    }));
    setCurrentPriority(choice)
  }
  // const customStyles = {
  //   control: () => ({
  //     display: "flex",
  //     border: "1px solid #ececec",
  //     borderRadius: "5px",
  //     "&:hover": {
  //       backgroundColor: "#e3e1e1",
  //     },
  //   }),
  //   menu: (styles) => ({
  //     ...styles,
  //     width: "150px",
  //   }),
  //   valueContainer: (styles) => ({
  //     ...styles,
  //     paddingInline: "3px",
  //   }),
  //   clearIndicator: (styles) => ({
  //     ...styles,
  //     padding: 0,
  //     marginRight: "3px",
  //     width: "15px",
  //     color: "#797979",
  //   }),
  // };
  return (
    <Select
      className="w-5/6 mx-auto cursor-pointer"
      name="priority"
      onChange={(choice) => updatePriority(choice)}
      options={options}
      components={{
        Option: IconOption,
        SingleValue,
        IndicatorSeparator: () => null,
        DropdownIndicator: () => null,
      }}
      // isClearable
      placeholder={
        <div className="flex items-center gap-1">
          <img loading="lazy" src={flag4} alt="flag" className="w-4 h-4" />
          <p className="text-sm">Priority</p>
        </div>
      }
      isSearchable={false}
      // styles={customStyles}
      value={currentPriority}
    />
  );
};

export default ModalPriority;
