import {
  Box,
  Container,
  Divider,
  Grid,
  Paper,
  Typography,
} from '@material-ui/core'
import React from 'react'

const Result = ({ data }) => {
  return (
    <Box mt={4} zIndex={3}>
      <Container maxWidth='md'>
        <Paper>
          <Grid>
            <Box
              display='flex'
              padding={5}
              flexDirection={{ xs: 'column', sm: 'column', md: 'row' }}
            >
              <Grid item>
                <Box
                  pl={3}
                  pr={3}
                  textAlign={{ xs: 'center', sm: 'center', md: 'left' }}
                >
                  <Typography variant='subtitle1'>IP ADDRESS</Typography>
                  <Typography variant='h5'>
                    {!data?.ip ? '111.119.183.5' : data?.ip}
                  </Typography>
                </Box>
              </Grid>
              <Divider orientation='vertical' flexItem />
              <Grid item textAlign={{ xs: 'center', sm: 'center', md: 'left' }}>
                <Box
                  pl={3}
                  pr={3}
                  textAlign={{ xs: 'center', sm: 'center', md: 'left' }}
                  display={'flex'}
                  flexDirection='column'
                >
                  <Typography variant='subtitle1'>LOCATION</Typography>
                  <Typography variant='h5'>
                    {!data?.region ? 'sindh' : data.region}
                  </Typography>
                </Box>
              </Grid>
              <Divider orientation='vertical' flexItem />
              <Grid item>
                <Box
                  pl={3}
                  pr={3}
                  textAlign={{ xs: 'center', sm: 'center', md: 'left' }}
                >
                  <Typography variant='subtitle1'>TIMEZONE</Typography>
                  <Typography variant='h5'>
                    {!data?.timezone ? '+05:00' : data.timezone}
                  </Typography>
                </Box>
              </Grid>
              <Divider orientation='vertical' flexItem />
              <Grid item>
                <Box
                  pl={3}
                  pr={3}
                  textAlign={{ xs: 'center', sm: 'center', md: 'left' }}
                >
                  <Typography variant='subtitle1'>ISP</Typography>
                  <Typography variant='h5'>
                    {!data?.isp ? 'CMPak Limited' : data?.isp}
                  </Typography>
                </Box>
              </Grid>
            </Box>
          </Grid>
        </Paper>
      </Container>
    </Box>
  )
}

export default Result
