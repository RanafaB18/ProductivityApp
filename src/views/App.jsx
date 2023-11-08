import Header from "../components/Header";
import Menu from "../components/Menu";
import beginnerImage from "../assets/beginner-image.jpg";
import AddTask from "../components/AddTask";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import TaskItem from "../components/TaskItem";
import { AnimatePresence, motion } from "framer-motion";
const App = () => {
  const { tasks } = useContext(DataContext);
  return (
    <main className="p-5">
      <Menu />
      <AnimatePresence>
        <section className="py-3 px-8">
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
              className="flex flex-col items-center max-w-xs mx-auto"
            >
              <img src={beginnerImage} alt="" className="w-fit" />
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
    </main>
  );
};

export default App;
