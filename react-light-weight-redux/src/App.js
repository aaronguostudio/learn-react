import React, { useState, useCallback, useRef, useEffect, memo } from 'react';
import './App.css';

let idSeq = Date.now()
const storeKey = '__TODOS__'

const Control = memo(function Control (props) {
  const { addTodo } = props
  const inputRef = useRef()
  const onSubmit = e => {
    e.preventDefault()
    const newText = inputRef.current.value.trim()
    if (newText.length === 0) return

    addTodo({
      id: ++idSeq,
      text: newText,
      complete: false
    })

    inputRef.current.value = ''
  }
  return (
    <div className="control">
      <h1>Todos</h1>
      <form onSubmit={onSubmit}>
        <input
          className="new-todo"
          ref={inputRef}
          type="text"
          placeholder="What needs to be done?"
        />
      </form>
    </div>
  )
})

const TodoItem = memo(function TodoItem (props) {
  const { todo: { id, text, complete }, toggleTodo, removeTodo } = props
  const onChange = () => {
    toggleTodo(id)
  }
  const onRemove = () => {
    removeTodo(id)
  }
  return (
    <li>
      <input
        type="checkbox"
        onChange={onChange}
        checked={complete}
      />
      <label>{ text }</label>
      <button onClick={onRemove}>X</button>
    </li>
  )
})

const Todos = memo(function Todos (props) {
  const { todos, toggleTodo, removeTodo } = props
  return (
    <ul>
      {
        todos.map(todo => {
          return <TodoItem
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
            removeTodo={removeTodo}
          />
        })
      }
    </ul>
  )
})

function App() {

  const [ todos, setTodos ] = useState([])

  const addTodo = useCallback((todo) => {
    setTodos(todos => [...todos, todo])
  }, [])

  const removeTodo = useCallback((id) => {
    setTodos(todos => todos.filter(todo => todo.id !== id))
  }, [])

  const toggleTodo = useCallback((id) => {
    setTodos(todos => todos.map(todo => todo.id === id ? {...todo, complete: !todo.complete} : todo))
  }, [])

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem(storeKey) || '[]')
    setTodos(todos)
  }, [])

  useEffect(() => {
    localStorage.setItem(storeKey, JSON.stringify(todos))
  }, [todos])

  return (
    <div>
      <Control addTodo={addTodo} />
      <Todos
        todos={todos}
        removeTodo={removeTodo}
        toggleTodo={toggleTodo}
      />
    </div>
  )
}

export default App;
