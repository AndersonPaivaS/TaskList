import styles from '../styles/components/input.module.css'
import { React, useContext } from 'react'
import { TaskListContext } from '../context/TaskListContext'

export default function Input() {
  const { text, handleTask, createTask } = useContext(TaskListContext)
  
  return (
    <div className={styles.inputContainer}>
      <input onChange={handleTask} type="text" placeholder='Digite a sua tarefa' />
      <button onClick={ () => createTask(text)}> Adicionar </button>
      <img src="/icons/to-do-list.png" alt="Delete" />
    </div> 
  )
}
