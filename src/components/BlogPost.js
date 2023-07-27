import { Typography, Card, CardContent, Grid, Button } from '@mui/material';
import { Container } from '@mui/system';

const BlogPost = ({ title, text, image }) => {
  return (
    <Container maxWidth="xl" >
      <Card sx={{margin:'100px 0px', borderRadius:10, width: '100%' ,minHeight:550}}>
        <Grid container spacing={2} sx={{ height: '100%' }}>
          <Grid item xs={8} md={6}>
            <CardContent>
              <Typography gutterBottom variant="h3" component="div">
                {title}
              </Typography>
              <Typography variant="h6" color="text.secondary" margin={8}>
                {text}
              </Typography>
              <Button variant="outlined" sx={{ ml: 'auto', mr: 1,backgroundColor: 'secondary.main', borderColor: 'white', color: 'white', borderRadius: 1 ,height:60,':hover':{bgcolor:"#3C4F76"}}}>Browse Templates</Button>
            </CardContent>
          </Grid>
          <Grid item xs={8} md={6} >
            <img 
              src={image} 
              alt={title}
              style={{ height: '100%', width: '100%', objectFit: 'cover' }} 
            />
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
};

export default BlogPost;
