import { useContext } from "react";
import { DataContext } from "../context/DataContext";

const Menu = () => {
  const { setShowSideBar, setModalData } = useContext(DataContext);

  function toggleSideBarHandler() {
    setShowSideBar((prevState) => !prevState);
    setModalData(((prevState) => ({...prevState, visible: false})))
  }

  return (
    <button onClick={toggleSideBarHandler}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 text-gray-500"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
    </button>
  );
};

export default Menu;
