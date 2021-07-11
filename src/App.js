import { Box } from '@material-ui/core'
import ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline'

import React from 'react'
import { useEffect } from 'react'
import './App.css'
import Header from './Header/Header'
import Map from './Map/Map'
import { useDispatch } from 'react-redux'
import { IpdataAction } from './action'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(IpdataAction())
  }, [])
  return (
    <ScopedCssBaseline>
      <Box>
        <Header />
        <Map />
      </Box>
    </ScopedCssBaseline>
  )
}

export default App
