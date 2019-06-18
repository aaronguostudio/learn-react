import React, { useState, PureComponent, useEffect, useCallback, useMemo, memo, useRef } from 'react'

// 因为传入的是 double, 使用 memo 之后只有在 double 变化之后才会重新渲染
// const Counter = memo(function Counter(props) {
//   console.log('Counter render')
//   return (
//     <h1 onClick={props.onClick}>{props.count}</h1>
//   )
// })

class Counter extends PureComponent {
  speak () {
    console.log('> Counter speak')
  }
  render () {
    const { props } = this
    return (
      <div onClick={props.onClick}>
        {props.count}
      </div>
    )
  }
}

// 自定义 hook
function useCountCostom (defaultCount) {
  const [count, setCount] = useState(defaultCount)
  const it = useRef()

  useEffect(() => {
    it.current = setInterval(() => {
      setCount(count => count + 1)
    }, 1000)
  }, [])

  useEffect(() => {
    if (count >= 10) {
      clearInterval(it.current)
    }
  })

  return [count, setCount]
}

// 这个方法是可以被其他的函数和组件复用的，而不是像 state 那样很难复用
function useSize () {
  const [size, setSize] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight,
  })

  const onResize = useCallback(() => {
    setSize({
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
    })
  }, [])

  useEffect(() => {
    window.addEventListener('resize', onResize, false)
    return () => {
      window.removeEventListener('resize', onResize, false)
    }
  }, [])

  console.log('>>size', size)

  return size
}

function Hook () {

  // const [count, setCount] = useState(0)
  const [count, setCount] = useCountCostom(0)
  const [fruit, setFruit] = useState('apple')
  const it = useRef()
  const size = useCallback
  const newSize = useSize()

  // 空数组只执行一次
  // count === 3 会运行两次，第一次状态变为 true, 第二次状态变为 false 两次变化都会触发重新计算
  const double = useMemo(() => {
    console.log('Only render if count changes')
    return count * 2
  }, [count === 3])

  const counterRef = useRef()

  // 如果不会用 useMemo, 每次 count 变化会导致 Counter 重新渲染
  // const onClick = () => {
  //   return () => {
  //     console.log('> on click')
  //   }
  // }

  // 这样就不会导致 Counter 重新渲染
  // const onClick = useMemo(() => {
  //   return () => {
  //     console.log('> on click')
  //   }
  // }, [])

  // useCallback 类似 useMemo, 可以不写 return () => {}
  const onClick = useCallback(() => {
    console.log('Click')
    setCount((count) => count + 1)

    console.log('>', counterRef.current)
    counterRef.current.speak()
  }, [counterRef])

  // useEffect 执行的是副作用，在渲染之后执行
  useEffect(() => {
    document.title = `Clicked ${count} times`
  })

  useEffect(() => {
    it.current = setInterval(() => {
      setCount(count => count + 1)
    }, 1000)
  }, [])

  // 有两个应用场景
  // 1. 作为子组件的引用，子组件必须是一个类组件
  // 2. 保存状态值，避免组件重新渲染之后清除引用
  useEffect(() => {
    if (count >= 10) {
      clearInterval(it.current)
    }
  })

  return (
    <div>
      <div>Count is { count }</div>
      <button onClick={() => setCount(count + 1)}> Click </button>
      <h1>Double: {double}</h1>
      <hr/>
      <div>Fruit is { fruit }</div>
      <button onClick={() => setFruit('Strewberry')}> Click </button>
      <hr/>
      <Counter ref={counterRef} count={double} onClick={onClick} />
      <h1>Size: {newSize.width} x {newSize.height}</h1>
    </div>
  )
}

export default Hook
