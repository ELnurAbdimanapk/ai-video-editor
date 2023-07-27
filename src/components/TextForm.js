import React, { useState } from 'react';
import { Box, TextField, Button, Grid, Container, Typography } from '@mui/material';

const TextForm = ({ setVideoUrl }) => {
  const [text, setText] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would usually send the text to your backend
    console.log(text);
    // Simulating a response with a video URL
    setVideoUrl('https://example.com/my-video.mp4');
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <Container maxWidth="md">
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h5" gutterBottom>
              Create Your Video
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              multiline
              rows={6}
              variant="outlined"
              placeholder="Enter your text here..."
              value={text}
              onChange={handleChange}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" type="submit" sx={{ background: '#1a237e',height:50 }}>
              Generate Video
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default TextForm;
