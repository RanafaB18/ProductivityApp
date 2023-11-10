import { motion } from "framer-motion";
import Menu from "./Menu";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { Link } from "react-router-dom";
const variant = {
  hidden: {
    x: "-100%",
    opacity: 0,
    transition: {
      duration: 0.4,
    },
  },
  visible: {
    x: "0",
    opacity: 1,
    transition: {
      duration: 0.4,
    },
  },
};
const SideBar = () => {
  const { showSideBar } = useContext(DataContext);
  return (
    <motion.aside
      variants={variant}
      initial="hidden"
      animate={showSideBar ? "visible" : "hidden"}
      className="absolute top-0 left-0 z-20 p-5 h-screen w-4/6 md:w-56 lg:w-96 bg-[#fcf9f9]"
    >
      <div className="flex items-center justify-between mb-5">
        <p>Ranafa</p>
        <Menu />
      </div>
      <div className="flex flex-col gap-3">
        <button className="group flex items-center w-full gap-3 py-2 hover:text-red-600 ">
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
        <Link to={"/performance"}>Performance</Link>
      </div>
    </motion.aside>
  );
};

export default SideBar;
