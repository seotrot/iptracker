import React from 'react'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import { Box, makeStyles } from '@material-ui/core'
import styled from 'styled-components'

const useStyles = makeStyles({
  icon: {
    backgroundColor: 'black',
    color: 'white',
  },
  btn: {
    borderRadius: 'none',
    padding: 10,
    color: 'white',
    fontSize: 55,
    backgroundColor: 'black',
    borderStartEndRadius: 10,
    borderBottomRightRadius: 10,
    height: 50,
    paddingLeft: 18,
    paddingRight: 18,
    cursor: 'pointer',
  },
})

const Search = ({ value, setInput, submitHandler }) => {
  const classes = useStyles()

  return (
    <Box display='flex' justifyContent='center'>
      <form onSubmit={(e) => submitHandler(e)}>
        <Box
          display='flex'
          justifyItems='center'
          width={{ xs: 270, sm: 340, md: 400 }}
        >
          <StyledInput
            type='text'
            placeholder='Search for any IP address or domain'
            value={value}
            onChange={(e) => setInput(e.target.value)}
          />

          <ArrowForwardIosIcon className={classes.btn} />
          <input type='submit' style={{ display: 'none' }} />
        </Box>
      </form>
    </Box>
  )
}

export default Search

const StyledInput = styled.input`
  outline: none;
  border: none;
  width: 400px;
  height: 50px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`
