import TodoList from "./TodoList";
import React, {useState, useRef} from "react";
function App() {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()

  function handleAddToDo(e) {
    const name = todoNameRef.current.value
    if(name === '') return console.log(name)
    setTodos([prevTodos])
    todoNameRef.current.value = null

  }

  return (
    <>
      <TodoList todoLists={todos}/>
      <input ref={todoNameRef}type="text"/>
      <button onClick={handleAddToDo}> Add to-do</button>
      <button>Clear Completed to-do</button>
      <div>0 Left to-do </div>
    </>
  )
  
}

export default App;
