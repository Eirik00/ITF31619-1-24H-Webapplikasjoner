import {useState} from "react"

/**
 * 
 * @param {function} createTodo 
 * @returns TodoForm
 */

const TodoForm = ({createTodo}) => {
    const [todoTitle, setTodoTitle] = useState("")
    const [todoContent, setTodoContent] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();

        if(todoTitle.trim() === "" || todoContent.trim() === ""){
            return;
        }
        createTodo(todoTitle, todoContent)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="todoTitle">Title</label>
                <input name="todoTitle" id="todoTitle" type="text" onChange={(e) => setTodoTitle(e.target.value)}/>
                <label htmlFor="todoContent">Content</label>
                <textarea name="todoContent" id="todoContent" rows="5" cols="30" onChange={(e) => setTodoContent(e.target.value)}/>
                <input type="submit" value="Add"/>
            </form>
        </>
    )
}

export default TodoForm