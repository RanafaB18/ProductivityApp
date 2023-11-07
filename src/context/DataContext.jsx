import { createContext, useState } from "react";

export const DataContext = createContext()

// eslint-disable-next-line react/prop-types
export const DataContextProvider = ({ children }) => {
    const [tasks, setTasks] = useState([])
    return (
        <DataContext.Provider value={{
            tasks,
            setTasks
        }}>
            { children }
        </DataContext.Provider>
    )
}
