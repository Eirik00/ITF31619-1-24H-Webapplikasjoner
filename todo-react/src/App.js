import { useEffect, useState } from "react"
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import Layout from "./components/Layout"

function App() {
  const [todoList, setTodoList] = useState([])


  const createTodo = (title, content) => {
    setTodoList((prev) => [...prev, {title, content}])
  }

  const deleteTodo = (delIndex) => {
    setTodoList((prev) => prev.filter((_, index) => index !== delIndex))
  }

  useEffect(()=>{
    setTodoList([{
      title: "test1",
      content: "loremIpsumblah blah blah"
    },
    {
      title: "test2",
      content: "blah blah blah hahahahaha"
    }])
  },[])

  return (
    <Layout>
      <TodoForm createTodo={createTodo}/>
      <TodoList todoList={todoList} deleteTodo={deleteTodo} />
    </Layout>
  );
}

export default App;
