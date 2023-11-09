import Header from "../components/Header";
import Menu from "../components/Menu";
import beginnerImage from "../assets/beginner-image.jpg";
import AddTask from "../components/AddTask";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import TaskItem from "../components/TaskItem";
import { AnimatePresence, motion } from "framer-motion";
import TaskDetails from "../components/TaskDetails";
import SideBar from "../components/SideBar";
const App = () => {
  const { tasks, showSideBar, modalData } = useContext(DataContext);
  return (
    <main
      className={` relative p-5 h-screen w-screen transition-colors duration-500 overflow-hidden ${
        modalData.visible || showSideBar
          ? "backdrop-saturate-50 bg-black/30"
          : "bg-white"
      }`}
    >
      <div className="absolute">
        <Menu />
      </div>
      <SideBar />
      <AnimatePresence>
        <section className="p-8">
          <section className="flex flex-col divide-y">
            <Header />
            {tasks.length !== 0 &&
              tasks.map((task) => {
                return <TaskItem key={task.id} task={task} />;
              })}
            <AddTask />
          </section>
          {tasks.length === 0 && (
            <motion.section
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.5 } }}
              aria-label="todos"
              className="absolute left-0 right-0 m-auto -z-10 flex flex-col items-center max-w-xs mx-auto"
            >
              <img
                loading="lazy"
                src={beginnerImage}
                alt=""
                className="w-fit"
              />
              <p className="font-semibold text-center">
                What do you need to get done today?
              </p>
              <p className="text-center text-sm opacity-70">
                By default, tasks added here will be due today. Click + to add a
                task
              </p>
            </motion.section>
          )}
        </section>
      </AnimatePresence>
      <AnimatePresence>
        {modalData.visible && <TaskDetails task={modalData.task} />}
      </AnimatePresence>
    </main>
  );
};

export default App;
