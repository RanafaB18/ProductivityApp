import Header from "../components/Header";
import Menu from "../components/Menu";
import beginnerImage from "../assets/beginner-image.jpg";
import AddTask from "../components/AddTask";
const App = () => {
  return (
    <main className="p-5">
      <Menu />
      <section className="py-3 px-8">
        <section className="flex flex-col divide-y">
          <Header />
          <AddTask />
        </section>
        <section aria-label="todos" className="flex flex-col items-center max-w-xs mx-auto">
          <img src={beginnerImage} alt="" className="w-fit"/>
          <p className="font-semibold text-center">What do you need to get done today?</p>
          <p className="text-center text-sm opacity-70">By default, tasks added here will be due today. Click + to add a task</p>
        </section>
      </section>
    </main>
  );
};

export default App;
