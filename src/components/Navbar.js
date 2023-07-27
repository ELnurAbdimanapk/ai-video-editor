import { MovieFilter } from '@mui/icons-material';
import { AppBar, Button, Container, Toolbar, Typography } from '@mui/material';
import React from 'react';

const Navbar = () => {
  return (
    <>
      <AppBar position='static' className='AppBarGradient'>
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ display: 'flex', alignItems: 'center' }}>
            <MovieFilter sx={{ mr: 2,color:'#3C4F76' }} />
            <Typography variant='h6' href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontWeight: 'bold',
                letterSpacing: '.3rem',
                textDecoration: 'none',
                cursor:"pointer"
              }}
            >
              aieditor
            </Typography>
            <Typography  sx={{ margin: '0 80px', fontWeight: 'medium' }}>Templates</Typography>
            <Typography sx={{ margin: '0 0', fontWeight: 'medium' }}>Explore</Typography>
            <Typography sx={{ margin: '0 80px', fontWeight: 'medium' }}>Support</Typography>
            <Typography sx={{ margin: '0 0', fontWeight: 'medium' }}>Pricing</Typography>
            <Button variant="outlined" sx={{ ml: 'auto', mr: 1,backgroundColor: 'secondary.main', borderColor: 'white', color: 'white', borderRadius: 1 }}>Sign Up</Button>
            <Button variant="contained" sx={{ backgroundColor: 'primary.main', color: 'white', borderRadius: 1 }}>Sign In</Button>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  )
}

export default Navbar;
