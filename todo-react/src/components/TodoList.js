/**
 * @param {Array} todoList 
 * @param {function} deleteTodo
 * @returns TodoList
 */

const TodoList = ({todoList, deleteTodo}) => {
    
    const handleClick = (index) => {
        deleteTodo(index)
    }

    return(
        <>
            <ul>
                {todoList?.map((todo, index) => (
                    <li key={index}>
                        <h3>{todo.title}</h3>
                        <p>{todo.content}</p>
                        <button onClick={() => handleClick(index)}>Complete</button>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default TodoList