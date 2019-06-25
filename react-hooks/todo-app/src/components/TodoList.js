import React, { useState, useCallback, useRef, useEffect, memo } from 'react'
import { createSet, createAdd, createRemove, createToggle } from './actions'

let idSeq = Date.now()
const LS_KEY = 'todos'

function bindActionCreators (actionCreators, dispatch) {
  const ret = {}
  for (let key in actionCreators) {
    ret[key] = function (...args) {
      const actionCreator = actionCreators[key]
      const action = actionCreator(...args)
      dispatch(action)
    }
  }
  return ret
}

const Control = memo((props) => {
  const { addTodo } = props
  const inputRef = useRef()

  const onSubmit = (e) => {
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
    <div>
      <h1>Todos</h1>
      <form onSubmit={onSubmit}>
        <input ref={inputRef} type="text" placeholder="What need to be done" />
      </form>
    </div>
  )
})

const TodoItem = memo((props) => {
  const { todo: { id, text, complete }, toggleTodo, removeTodo } = props
  const onChange = () => {
    toggleTodo(id)
  }
  const onRemove = () => {
    removeTodo(id)
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
  const { todos, removeTodo, toggleTodo } = props
  return (
    <ul>
    {
      todos.map(todo => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
          />
        )
      })
    }
    </ul>
  )
})

function TodoList () {
  const [todos, setTodos] = useState([])

  // 假如引入了这个 incrementCount 变量，在 set 和 add 的时候增加
  // 这时候就需要在 set 和 add 两处重复操作，换一种思维，围绕数据展开
  const [incrementCount, setIncrementCount] = useState(0)

  // reducer 替换 dispatch 里面处理数据的部分
  function reducer (state, action) {
    const { type, payload } = action
    const { todos, incrementCount } = state

    switch (type) {
      case 'set':
        return {
          ...state,
          todos: payload,
          incrementCount: incrementCount + 1
        }
      case 'add':
        return {
          ...state,
          todos: [...todos, payload],
          incrementCount: incrementCount + 1
        }
      case 'remove':
        return {
          ...state,
          todos: todos.filter(todo => {
            return todo.id !== payload
          })
        }
      case 'toggle':
        return {
          ...state,
          todos: todos.map(todo => {
            return todo.id === payload
                      ? { ...todo, complete: !todo.complete }
                      : todo
          }),
        }
      default:
        return state
    }
  }

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

  // 作为修改状态的中心函数，让操作变得透明
  // 把操作放到一起也有助于管理和 debug
  // passthrough as props, no dependencies
  const dispatch = useCallback((action) => {

    const state = {
      todos,
      incrementCount
    }

    // from useState
    const setters = {
      todos: setTodos,
      incrementCount: setIncrementCount
    }

    const newState = reducer(state, action)

    // 对于 dispatch 来说，它并不知道哪些值被更新了，就是一股脑的进行设置
    for (let key in newState) {
      setters[key](newState[key])
    }


    // const { type, payload } = action
    // switch (type) {
    //   case 'set':
    //     setTodos(payload)
    //     setIncrementCount(c => c + 1)
    //     break
    //   case 'add':
    //     setTodos(todos => [...todos, payload])
    //     setIncrementCount(c => c + 1)
    //     break
    //   case 'remove':
    //     setTodos(todos => todos.filter(todo => todo.id !== payload))
    //     break
    //   case 'toggle':
    //     setTodos(todos => todos.map(todo => {
    //       return todo.id === payload
    //                 ? { ...todo, complete: !todo.complete }
    //                 : todo
    //     }))
    //     break
    //   default:
    //     break
    // }
  }, [todos, incrementCount])

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem(LS_KEY)) || []
    const { createTodos } = bindActionCreators({
      createTodos: createSet
    }, dispatch)
    createTodos(todos)
  }, [])

  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(todos))
  }, [todos])

  return (
    <div>
      <Control
        {
          ...bindActionCreators({
            addTodo: createAdd
          }, dispatch)
        }
      />
      <Todos
        todos={todos}
        {
          ...bindActionCreators({
            removeTodo: createRemove,
            toggleTodo: createToggle
          }, dispatch)
        }
      />
    </div>
  )
}

export default TodoList;
