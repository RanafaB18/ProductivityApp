import { createContext, useState } from "react";

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
    return (
        <DataContext.Provider value={{
            tasks,
            setTasks
        }}>
            { children }
        </DataContext.Provider>
    )
}
