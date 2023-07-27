import React, { useState } from 'react';
import { Box, TextField, Button, Grid, Container, Typography } from '@mui/material';

const RegisterForm = ({ handleRegister }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    handleRegister({ username, password });
  };

  return (
    <Container maxWidth="sm">
      <Box 
        component="form" 
        onSubmit={handleSubmit} 
        sx={{ 
          mt: 3, 
          bgcolor: 'background.paper', 
          p: 4, 
          borderRadius: 2, 
          boxShadow: '0 3px 10px rgba(0, 0, 0, 0.2)' 
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h5" gutterBottom sx={{ mb: 2, textAlign: 'center', fontWeight: 'bold' }}>
              Sign Up
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              variant="outlined"
              label="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              variant="outlined"
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12}>
            <Button 
              variant="contained" 
              type="submit" 
              fullWidth
              sx={{ 
                background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)', 
                color: 'white',
                height: 50, 
                boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)', 
              }}
            >
              Register
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default RegisterForm;
