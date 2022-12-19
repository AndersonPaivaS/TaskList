import { useState, createContext } from "react";

export const TaskListContext = createContext({})

export function TaskListProvider( {children} ) {

    const [text, setText] = useState('')
    const [arrayTasks, setArrayTasks] = useState([])

    const [id, setId] = useState(0)


    function handleTask(e) {
        setText(e.target.value)
    }

    const createTask = () => {
        const taskObj = {tarefa: text, id: id}
        setId( id + 1 )
        handleSubmit(taskObj)
        
        
    }

    const handleSubmit = (tarefa) => {
        setArrayTasks([...arrayTasks, tarefa])
    }

    const deleteTask = (numId) => {
        console.log(numId)
        const newArray = arrayTasks.filter((currentTask) => currentTask.id != numId )
        setArrayTasks(newArray)
    }

    return(
        <TaskListContext.Provider value={{ handleTask, arrayTasks, deleteTask, createTask }}>
            {children}
        </TaskListContext.Provider>
    )
}  