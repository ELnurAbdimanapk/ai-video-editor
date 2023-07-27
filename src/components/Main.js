import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";

const Main = () => {
  return (
    <>
    <Container maxWidth="lg">
    <Box sx={{margin:"auto"}}>
      <Typography variant="h1" color="secondary.main" sx={{margin:"100px  0"}} >
        Convert Text to Video with AI
      </Typography>
      <Typography sx={{margin:"auto",fontSize:20}} maxWidth={900}>
        Convert your text into videos with InVideo's AI powered Text-to-Video
        converter. Use AI to create videos for social media ads, promos, or your
        YouTube channel. InVideo's AI enables you to turn your words into videos
        as effortlessly as hitting the play button.
      </Typography>
      <Button variant="contained" sx={{ margin:"100px",backgroundColor: 'primary.main', color: 'white', borderRadius: 1 }}>Turn text to video , now!</Button>
      <img src="https://assets-static.invideo.io/images/large/Export_ea178869b8.webp" alt="videoeditor"/>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h1">7M</Typography>
        <Typography variant="body1">Customers</Typography>
        <Typography variant="body1">190 <span>countries</span></Typography>
      </Box>
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h1">1</Typography>
        <Typography variant="body1">Customers</Typography>
        <Typography variant="body1">190 <span>countries</span></Typography>
      </Box>
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h1">4.8</Typography>
        <Typography variant="body1">Customers</Typography>
        <Typography variant="body1">190 <span>countries</span></Typography>
      </Box>
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h1">7M</Typography>
        <Typography variant="body1">Customers</Typography>
        <Typography variant="body1">190 <span>countries</span></Typography>
      </Box>
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h1">7M</Typography>
        <Typography variant="body1">Customers</Typography>
        <Typography variant="body1">190 <span>countries</span></Typography>
      </Box>
      </Box>

    </Container>
    
    </>
  );
};

export default Main;
