import Header from "../components/Header";
import Menu from "../components/Menu";
import beginnerImage from "../assets/beginner-image.jpg";
import AddTask from "../components/AddTask";
import { useContext, useEffect, useRef } from "react";
import { DataContext } from "../context/DataContext";
import TaskItem from "../components/TaskItem";
import { AnimatePresence, motion } from "framer-motion";
import TaskDetails from "../components/TaskDetails";
import SideBar from "../components/SideBar";
import MobileDetails from "../components/MobileDetails";
const App = () => {
  const {
    tasks,
    setShowSideBar,
    // setShowTaskForm,
    setModalData,
    showSideBar,
    modalData,
  } = useContext(DataContext);
  const sideBarRef = useRef();
  const taskDetailRef = useRef();
  const menuRef = useRef();
  const addTaskRef = useRef();
  function closeModalHandler(e) {
    if (
      !sideBarRef.current?.contains(e.target) &&
      !menuRef.current?.contains(e.target)
    ) {
      setShowSideBar(false);
    }
    if (!taskDetailRef.current?.contains(e.target)) {
      setModalData((prevState) => ({ ...prevState, visible: false }));
    }
    // Causes bug that prevents priority from being selected.
    // if (!addTaskRef.current?.contains(e.target)) {
    //   setShowTaskForm(false);
    // }
  }

  useEffect(() => {
    document.addEventListener("click", closeModalHandler);
    return () => {
      document.removeEventListener("click", closeModalHandler);
    };
  });
  return (
    <main
      className={` relative p-5 h-screen w-screen transition-colors duration-500 overflow-hidden ${
        modalData.visible || showSideBar
          ? "backdrop-saturate-50 bg-black/30 h-screen w-screen"
          : "bg-white"
      } ${showSideBar && "lg:bg-white"}`}
    >
      <div ref={menuRef} className="absolute">
        <Menu />
      </div>
      <div ref={sideBarRef}>
        <SideBar />
      </div>
      <section className="p-8">
        <section
          className={`flex flex-col divide-y md:max-w-lg lg:max-w-3xl ${
            showSideBar ? "lg:pl-32" : ""
          } mx-auto`}
        >
          <Header />
          {tasks.length !== 0 &&
            tasks.map((task) => {
              return (
                <TaskItem key={task.key ? task.key : task.id} task={task} />
              );
            })}
          <div ref={addTaskRef}>
            <AddTask />
          </div>
        </section>
        {tasks.length === 0 && (
          <motion.section
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
            className="absolute left-0 right-0 m-auto -z-10 flex flex-col items-center max-w-xs mx-auto"
          >
            <img loading="lazy" src={beginnerImage} alt="" className="w-fit" />
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
      <AnimatePresence>
        {modalData.visible && (
          <div ref={taskDetailRef} className="">
            <div className="md:hidden">
              <MobileDetails task={modalData.task} />
            </div>
            <div className="md:block">
              <TaskDetails task={modalData.task}/>
            </div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default App;
