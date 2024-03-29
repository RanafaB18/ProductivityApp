import { createContext, useEffect, useState } from "react";
import { getTasks } from "../services/crud";

export const DataContext = createContext()

// eslint-disable-next-line react/prop-types
export const DataContextProvider = ({ children }) => {
    const [tasks, setTasks] = useState([])
    const [showSideBar, setShowSideBar] = useState(false)
    const [modalData, setModalData] = useState({ visible: false, task: {} });
    const [showTaskForm, setShowTaskForm] = useState(false)
    const [rerun, setRerun] = useState(false)

    useEffect(() => {
        async function fetchData() {
            return await getTasks()
        }

        fetchData().then((res) => {
            setTasks(res.data.sort((a, b) => (b.priority - a.priority)))
        }).catch((e) => {
            console.log("Error: ", e);
        })
    }, [rerun, setRerun])
    return (
        <DataContext.Provider value={{
            tasks,
            showSideBar,
            modalData,
            showTaskForm,
            rerun,
            setRerun,
            setShowTaskForm,
            setModalData,
            setShowSideBar,
            setTasks
        }}>
            { children }
        </DataContext.Provider>
    )
}
