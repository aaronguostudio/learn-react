import React, { useState, useCallback, useRef, useEffect, memo } from 'react'
import { createSet, createAdd, createRemove, createToggle } from './actions'

let idSeq = Date.now()
const LS_KEY = 'todos'

const Control = memo((props) => {
  const { dispatch } = props
  const inputRef = useRef()

  const onSubmit = (e) => {
    e.preventDefault()
    const newText = inputRef.current.value.trim()

    if (newText.length === 0) return

    dispatch(createAdd({
      id: ++idSeq,
      text: newText,
      complete: false
    }))

    inputRef.current.value = ''
  }

  return (
    <div>
      <h1>Todos</h1>
      <form onSubmit={onSubmit}>
        <input ref={inputRef} type="text" placeholder="What need to be done" />
      </form>
    </div>
  )
})

const TodoItem = memo((props) => {
  const { todo: { id, text, complete }, dispatch } = props
  const onChange = () => {
    dispatch(createToggle(id))
  }
  const onRemove = () => {
    dispatch(createRemove(id))
  }

  return (
    <li>
      <input type="checkbox" onChange={onChange} checked={complete} />
      <label>{text}</label>
      <button onClick={onRemove}>Delete</button>
    </li>
  )
})

const Todos = memo((props) => {
  const { todos, dispatch } = props
  return (
    <ul>
    {
      todos.map(todo => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            dispatch={dispatch}
          />
        )
      })
    }
    </ul>
  )
})

function TodoList () {
  const [todos, setTodos] = useState([])

  // useCallback to prevent re-render
  // const addTodo = useCallback((todo) => {
  //   setTodos(todos => [...todos, todo])
  // }, [])

  // const removeTodo = useCallback((id) => {
  //   setTodos(todos => todos.filter(todo => todo.id !== id))
  // }, [])

  // const toggleTodo = useCallback((id) => {
  //   setTodos(todos => todos.map(todo => {
  //     return todo.id === id
  //               ? { ...todo, complete: !todo.complete }
  //               : todo
  //   }))
  // }, [])

  // passthrough as props, no dependencies
  const dispatch = useCallback((action) => {
    const { type, payload } = action
    switch (type) {
      case 'set':
        setTodos(payload)
        break
      case 'add':
        setTodos(todos => [...todos, payload])
        break
      case 'remove':
        setTodos(todos => todos.filter(todo => todo.id !== payload))
        break
      case 'toggle':
        setTodos(todos => todos.map(todo => {
          return todo.id === payload
                    ? { ...todo, complete: !todo.complete }
                    : todo
        }))
        break
      default:
        break
    }
  }, [])

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem(LS_KEY)) || []
    dispatch(createSet(todos))
  }, [])

  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(todos))
  }, [todos])

  return (
    <div>
      <Control dispatch={dispatch} />
      <Todos todos={todos} dispatch={dispatch} />
    </div>
  )
}

export default TodoList;
