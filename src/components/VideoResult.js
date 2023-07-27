import React from 'react';
import { Box, Typography } from '@mui/material';

const VideoResult = ({ videoUrl }) => {
  return (
    <Box sx={{ mt: 3, textAlign: 'center' }}>
      <Typography variant="h5" gutterBottom>
        Your video:
      </Typography>
      {videoUrl && (
        <video 
          src={videoUrl} 
          controls 
          autoPlay
          width={800}
          height={'auto'}
        />
      )}
    </Box>
  );
};

export default VideoResult;
