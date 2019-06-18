# This project is a practice for basic react hooks and react redux

# Hooks rules
- Only call at the top levels
- Only call hooks from react functions, don't call from regular js functions

# Hooks common questions
## Lifecycle mao

form top to down

-> 1

constructuor -> useState

-> 2

geDerivedStateFromProps -> setStateFunc()
```jsx
class Counter extends Component {
  state = {
    overflow: false
  }
  static getDerivedStateFromProps (props, state) {
    if (props.count > 10) {
      return {
        overflow: true
      }
    }
  }
}

function Counter (props) {
  const [ overflow, setOverflow ] = useState(false)
  if (porps.count > 10) {
    setOverflow(true)
  }
}
```

-> 3

shouldComponentUpdate -> memo, useCallback

-> 4

render

-> 5

componentDidMount
componentDidUpdate
componentWillUnmount
componentDidUnmount

```jsx

function App () {
  useEffect(() => {
    // componentDidMount, componentDidUpdate
    return () => {
      // componentWillUnmount
    }
  }, [])
}

```

## class props
  - useRef replaces class props
  - useRef only accepts value

```jsx
// traditional
class App {
  it = 0
}

// hooks
function App {
  const it = useRef(0)
}


```


## how to get history props and state
```jsx
function Counter () {
  const [count, setCount] = useState(0)
  const prevCountRef = useRef()

  useEffect(() => {
    prevCountRef.current = count
  })

  const prevCountRef = prevCountRef.current
  return <h1> Now: {count}, before: {prevCount} </h1>
}
```


## force update
```jsx
function Counter () {
  const [count, setCount] = useState(0)
  const [updater, setUpdater] = useState(0)

  function forceUpdate () {
    setUpdater(updater => updater + 1)
  }

  const prevCountRef = useRef()

  useEffect(() => {
    prevCountRef.current = count
  })

  const prevCountRef = prevCountRef.current
  return <h1> Now: {count}, before: {prevCount} </h1>
}
```


# Redux rules
- 单一数据源
- 状态不可变
- 纯函数修改状态
