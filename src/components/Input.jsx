import styles from '../styles/components/input.module.css'
import { React, useContext } from 'react'
import { TaskListContext } from '../context/TaskListContext'

import { FcTodoList } from 'react-icons/fc';

export default function Input() {
  const { text, handleTask, createTask } = useContext(TaskListContext)
  
  return (
    <div className={styles.inputContainer}>
      <input onChange={handleTask} type="text" placeholder='Digite a sua tarefa' />
      <button onClick={ () => createTask(text)}> Adicionar </button>
      <div className={styles.todoimg}> <FcTodoList /> </div>
      
    </div> 
  )
}
