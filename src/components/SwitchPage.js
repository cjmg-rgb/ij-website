import { Box, Container } from "@mui/material";
import Grid from "@mui/material/Grid";

const SwitchPage = () => {
  
  const content = (
    <Container>
      <Grid container spacing={5} justifyContent='center'>
        <Grid item xs={12} sm={3}>
          <Box
            component='img'
            src={require('../assets/images/O1.png')}
            width='100%'
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Box
            component='img'
            src={require('../assets/images/O2.png')}
            width='100%'
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Box
            component='img'
            src={require('../assets/images/O3.png')}
            width='100%'
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Box
            component='img'
            src={require('../assets/images/O4.png')}
            width='100%'
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Box
            component='img'
            src={require('../assets/images/O5.png')}
            width='100%'
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Box
            component='img'
            src={require('../assets/images/O6.png')}
            width='100%'
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Box
            component='img'
            src={require('../assets/images/O7.png')}
            width='100%'
          />
        </Grid>
      </Grid>
    </Container>
  )
  
  return content;
}
 
export default SwitchPage;