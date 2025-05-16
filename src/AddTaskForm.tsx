import { useState } from 'react'

interface AddTaskFormProps {
    onNewTask: (name: string) => void;
}

function AddTaskForm(props: AddTaskFormProps) {
    const [taskName, setTaskName] = useState("");

    function handleButtonClicked() {
        props.onNewTask(taskName);
        setTaskName("");
    }

    return (
        <div> {/* Unfortunately comments in JSX have to be done like this */}
            <input 
                placeholder="New task name"
                className="border rounded px-2"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
            />
            <button 
                onClick={handleButtonClicked}
                className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white px-3 py-1 ml-2 rounded"
            >
                Add task
            </button>
        </div>
    );
  }
  
  export { AddTaskForm };