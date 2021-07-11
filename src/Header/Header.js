import { Box, Typography } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
import Result from '../Result/Result'
import Search from './Search'

const Header = ({ value, setInput, submitHandler, result }) => {
  // Api-key: at_EIPg4Itm2P17YDXxPUEMOEgIUbjlU

  return (
    <Container>
      <Box display='flex' justifyContent='center' color='white' pt={3}>
        <Typography variant='h4'>IP Address Tracker</Typography>
      </Box>
      <Box pt={4} pb={7}>
        <Search
          value={value}
          setInput={setInput}
          submitHandler={submitHandler}
        />
        <Result data={result} />
      </Box>
    </Container>
  )
}

export default Header

const Container = styled.div`
  background: url('images/pattern-bg.png');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  height: 270px;
  z-index: 99;
  position: absolute;
  top: 0;
  width: 100%;
`
