import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Header3 = () => {

  useEffect(() => {
    AOS.init({duration: 3000});
  }, [])
  
  const content = (
    <Box mb={5} component='section' id='header3'>
      <Box
        component='video'
        src={require('../assets/clips/Add a heading.mov')}
        width='100%'
        loop
        autoPlay
        controls
      />

        <Grid container spacing={1}>
          <Grid item sm={6} xs={12}>
            <Box
              data-aos='fade-right'
              component='img'
              src={require('../assets/images/1.png')}
              width='100%'
            />
          </Grid>
          <Grid item sm={6} xs={12}>
            <Box
              data-aos='fade-left'
              component='img'
              src={require('../assets/images/2.png')}
              width='100%'
            />
          </Grid>
            <Grid item sm={6} xs={12}>
              <Box
                data-aos='zoom-in'
                component='img'
                src={require('../assets/images/3.png')}
                width='100%'
              />
            </Grid>
            <Grid item sm={6} xs={12}>
              <Box
                data-aos='zoom-in'
                component='img'
                src={require('../assets/images/4.png')}
                width='100%'
              />
            </Grid>
            <Grid item sm={6} xs={12}>
              <Box
                data-aos='fade-right'
                component='img'
                src={require('../assets/images/5.png')}
                width='100%'
              />
            </Grid>
            <Grid item sm={6} xs={12}>
              <Box
                data-aos='fade-left'
                component='img'
                src={require('../assets/images/6.png')}
                width='100%'
              />
            </Grid>
        </Grid>
     
    </Box>
  )
  
  return content;
}
 
export default Header3;