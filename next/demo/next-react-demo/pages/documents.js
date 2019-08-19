import React, { useState } from 'react'
import Nav from '../components/nav'
import axios from 'axios'

export default function Documents ({ weather }) {
  const [result, setResult] = useState(0)

  return (
    <div>
      <Nav />
      <div>Hooks: {result}</div>
      <button onClick={() => setResult(result + 1)}>Add</button>
      <div>
        { JSON.stringify(weather) }
      </div>
    </div>
  )
}

Documents.getInitialProps = async ({ req }) => {
  console.log('>>>')
  const res = await axios.get('https://samples.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=b6907d289e10d714a6e88b30761fae22')
  return { weather: res.data }
}
