import React, { useState } from 'react';
import './App.css';
import LikeButton from './components/LikeButton'
import useMousePosition from './hooks/useMousePosition'
import useURLLoader from './hooks/useURLLoader'

const style = {
  width: 200
}

const DogShowWithHook = () => {
  const [data, loading] = useURLLoader('https://dog.ceo/api/breeds/image/random')
  return (
    <>
      {
        loading ? <p>Loading...</p> : <img src={data && data.message} style={style} />
      }
    </>
  )
}

const CatShowHook = () => {
  const [category, setCategory] = useState('1')
  const [data, loading] = useURLLoader(`https://api.thecatapi.com/v1/images/search?limit=1&category_ids=${category}`)
  return (
    <>
      {
        loading ? <p>Loading...</p> : <img src={data && data[0].url} style={style} />
      }
      <button onClick={() => setCategory('1')}>1</button>
      <button onClick={() => setCategory('2')}>2</button>
      <button onClick={() => setCategory('3')}>3</button>
    </>
  )
}

function App() {

  const positon = useMousePosition()
  return (
    <div className="App">
      <LikeButton />
      <hr />
      <h1>{positon.x}</h1>
      {/* <MouseTracker /> */}
      <DogShowWithHook />
      <CatShowHook />
    </div>
  );
}

export default App;
