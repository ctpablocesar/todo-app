import { useTodos } from '../hooks/useTodo';

export const Title = () => {
    
    const { pending } = useTodos();

    return (
        <h1>Todos: { pending }</h1>
    )
}
