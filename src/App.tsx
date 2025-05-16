import { useState } from 'react'
import './App.css'
import { TodoItem } from './TodoItem'
import { AddTaskForm } from './AddTaskForm'
import { Modal } from './AddTaskFormModal'

import { nanoid } from "nanoid";

interface ITodoData {
  id: string;
  name: string;
  completed: boolean;
}

interface AppProps {
  tasks: ITodoData[];
}

function App(props: AppProps) {

  const INITIAL_TASK_LIST = props.tasks
  const [taskList, setTaskList] = useState<ITodoData[]>(INITIAL_TASK_LIST);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function addTask(name: string) {
    const newTask = {
      id: `todo-${nanoid()}`,
      name: name,
      completed: false
    };
    setTaskList([...taskList, newTask]);
    setIsModalOpen(false);
  }

  function toggleTaskCompleted(id: string) {
    const updatedTasks = taskList.map((task) => {
      if (id === task.id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTaskList(updatedTasks);
  }

  function deleteTask(id: string) {
    const remainingTasks = taskList.filter((task) => id !== task.id);
    setTaskList(remainingTasks);
  }

  return (
      <main className="m-4"> {/* Tailwind: margin level 4 on all sides */}
          <Modal 
              isOpen={isModalOpen}
              onCloseRequested={() => setIsModalOpen(false)}
              headerLabel="Add Task"
          >
              <AddTaskForm onNewTask={addTask}/>
          </Modal>

          <section>
              <button onClick={() => setIsModalOpen(true)} className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white px-3 py-1 rounded">
                  New Task
              </button>
              <h1 className="text-xl font-bold">To do</h1>
              
              <ul>
                  {taskList.map((task) => 
                    <TodoItem
                    id={task.id}
                    name={task.name}
                    completed={task.completed}
                    key={task.id}
                    onToggleCompleted={toggleTaskCompleted}
                    onDelete={deleteTask}
                  />)}
              </ul>

              <button onClick={() => setTaskList([])} className="p-1 bg-red-600 text-white">Delete all</button>
          </section>
      </main>
  );
}

export default App;
