import { createContext, useState } from "react";
import { todayDate } from "../../constants";

export const DataContext = createContext()

// eslint-disable-next-line react/prop-types
export const DataContextProvider = ({ children }) => {
    const [tasks, setTasks] = useState([
        {
            taskName: 'washing',
            description: 'clothes',
            priority: 'P4',
            id: '1-3132i023',
            subtasks: []
        }
    ])
    const [showSideBar, setShowSideBar] = useState(false)
    const [modalData, setModalData] = useState({ visible: false, task: {} });
    const [calculations, setCalculations] = useState({
        [todayDate]: {
            numberOfTasks: 0,
            doneTasks: 0
        }
    })
    console.log("Calculation", calculations);
    return (
        <DataContext.Provider value={{
            tasks,
            showSideBar,
            modalData,
            calculations,
            setCalculations,
            setModalData,
            setShowSideBar,
            setTasks
        }}>
            { children }
        </DataContext.Provider>
    )
}
