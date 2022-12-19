import './App.css'
import Input from './components/Input'
import Tasks from './components/Tasks'
import { TaskListProvider } from './context/TaskListContext'

function App() {

  return (
    <div className="App">
      <TaskListProvider>
        <Input />
        <Tasks />
      </TaskListProvider>
    </div>
  )
}

export default App
