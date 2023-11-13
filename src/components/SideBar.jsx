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
        <p className="text-gray-400 text-sm">Track your productivity</p>
        <Menu />
      </div>
      <div className="flex flex-col gap-3">
        <Link to={"/performance"}>Performance</Link>
      </div>
    </motion.aside>
  );
};

export default SideBar;
