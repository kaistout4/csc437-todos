import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

interface TodoItemProps {
    id: string;
    name: string;
    completed: boolean;
    onToggleCompleted: (id: string) => void;
    onDelete: (id: string) => void;
}

function TodoItem(props: TodoItemProps) {
    function handleCheckboxClick() {
        props.onToggleCompleted(props.id);
    }

    function handleDeleteClick() {
        props.onDelete(props.id);
    }

    return (
      <li className="flex items-center">
        <label>
            <input 
                id={props.id} 
                type="checkbox" 
                checked={props.completed}
                onChange={handleCheckboxClick}
            /> {props.name}
        </label>
        <button className="ml-4" onClick={handleDeleteClick}>
          <FontAwesomeIcon icon={faTrashCan} className="text-gray-600" title="Delete task" />
        </button>
      </li>
    );
  }
  
  export { TodoItem };
  