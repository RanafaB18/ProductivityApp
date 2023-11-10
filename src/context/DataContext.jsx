import { createContext, useEffect, useState } from "react";
import { getTasks } from "../services/crud";

export const DataContext = createContext()

// eslint-disable-next-line react/prop-types
export const DataContextProvider = ({ children }) => {
    const [tasks, setTasks] = useState([])
    const [showSideBar, setShowSideBar] = useState(false)
    const [modalData, setModalData] = useState({ visible: false, task: {} });
    const [showTaskForm, setShowTaskForm] = useState(false)

    useEffect(() => {
        async function fetchData() {
            return await getTasks()
        }

        fetchData().then((res) => {
            console.log("Response", res);
            console.log(res.data)
            setTasks(res.data.sort((a, b) => (b.priority - a.priority)))
        }).catch(() => {
            console.log("Will happen");
        })
    }, [])
    return (
        <DataContext.Provider value={{
            tasks,
            showSideBar,
            modalData,
            showTaskForm,
            setShowTaskForm,
            setModalData,
            setShowSideBar,
            setTasks
        }}>
            { children }
        </DataContext.Provider>
    )
}
