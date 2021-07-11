import { Box } from '@material-ui/core'
import ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline'
import axios from 'axios'

import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import Header from './Header/Header'
import Map from './Map/Map'

const getData = async (term = '') => {
  const data = await axios
    .get(
      `https://geo.ipify.org/api/v1?apiKey=at_1P8R2YXGc34F7DjKmE1Lv3KQEoRFB&ipAddress=${term}`
    )
    .then((res) => {
      return res.data
    })
  return data
}

function App() {
  const [input, setInput] = useState('')
  const [result, setResult] = useState(null)
  const [map, setMap] = useState(null)

  useEffect(() => {
    getData().then((data) => {
      setResult({
        ip: data.ip,
        isp: data.isp,
        location: data.location,
      })
    })
  }, [])

  useEffect(() => {
    if (map) {
      map.flyTo([result.location.lat, result.location.lng], 17)
    }
  }, [result, map])

  const submitHandler = async (e) => {
    e.preventDefault()
    getData(input).then((data) => {
      setResult({
        ip: data.ip,
        isp: data.isp,
        location: data.location,
      })
    })
  }

  return (
    <ScopedCssBaseline>
      <Box>
        <Header
          value={input}
          setInput={setInput}
          submitHandler={submitHandler}
          result={result}
        />
        {!result ? (
          <h1>Please wait</h1>
        ) : (
          <Map result={result} setMap={setMap} />
        )}
      </Box>
    </ScopedCssBaseline>
  )
}

export default App
