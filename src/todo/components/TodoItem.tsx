import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import { Todo } from "../interfaces/interfaces"
import { useTodos } from '../hooks/useTodo';

interface props {
    todo: Todo
}

export const TodoItem = ({ todo }: props) => {

    // const { toggleTodo } = useContext(TodoContext);
    const { toggleTodo } = useTodos();

    return (
        <li
            style={{
                cursor: 'pointer',
                textDecoration: todo.completed ? 'line-through' : 'none'
            }}
            onDoubleClick={() => toggleTodo(todo.id)}
        >
            {todo.desc}
        </li>
    )
}