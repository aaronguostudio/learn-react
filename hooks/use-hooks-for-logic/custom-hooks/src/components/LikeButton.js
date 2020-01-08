import React, { useState, useEffect } from 'react'

const LikeButton = () => {
  const [like, setLike] = useState(0)
  const [on, setOn] = useState(true)
  useEffect(() => {
    console.log('> effect')
    document.title = `Clicked ${like} times`
  }, [like])

  return (
    <>
      <button onClick={() => setLike(like + 1)}>{like}</button>

      <button onClick={() => setOn(!on)}>{on ? 'On' : 'Off'}</button>
    </>
  )
}

export default LikeButton;
