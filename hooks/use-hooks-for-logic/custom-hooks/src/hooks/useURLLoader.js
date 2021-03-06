import React, { useState, useEffect } from 'react'
import axios from 'axios'

const useURLLoader = (url) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get(url).then(res => {
      console.log(res)

      setData(res.data)
      setLoading(false)
    })
  }, [url])

  return [data, loading]
}

export default useURLLoader
