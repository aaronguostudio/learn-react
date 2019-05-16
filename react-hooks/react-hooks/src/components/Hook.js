import React, { useState, useEffect } from 'react'

function Hook () {

  const [count, setCount] = useState(0)
  const [fruit, setFruit] = useState('apple')

  useEffect(() => {
    document.title = `Clicked ${count} times`
  })

  return (
    <div>
      <div>Count is { count }</div>
      <button onClick={() => setCount(count + 1)}> Click </button>
      <hr></hr>
      <div>Fruit is { fruit }</div>
      <button onClick={() => setFruit('Strewberry')}> Click </button>
    </div>
  )
}

export default Hook