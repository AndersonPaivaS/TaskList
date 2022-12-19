import styles from '../styles/components/tasks.module.css'
import React from 'react'
import { useContext } from 'react'
import { TaskListContext } from '../context/TaskListContext'
import { useState } from 'react'

export default function Tasks() {

  const { arrayTasks, deleteTask } = useContext(TaskListContext)
  const [concluded, setConcluded] = useState(false)

  function taskConcluded() {
    setConcluded( !concluded)
  }

  return (
    <div className={styles.tasksContainer}>
      {arrayTasks.map((task) => (
      <>
          <div className={styles.taskProgressContainer}>

            <button onClick={taskConcluded} className={styles.taskProgress}>
                <p>{task.tarefa}</p>
            </button>

            <div className={styles.delete}>
              <button onClick={ () => deleteTask(task.id)}> <img src="/icons/delete.png" alt="" /> </button>
            </div>

          </div>
      </>
          
      ))}
    </div>
  )
}
