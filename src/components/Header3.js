import Typography from "@mui/material/Typography";
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
          <Grid item sm={6} xs={12} 
          >
            <Box className='image'>
              <Box
                data-aos='fade-right'
                component='img'
                src={require('../assets/images/1.png')}
                className='image__img'
              />
              <Box
                className='image__overlay'
              >
                <Box className='image__description'>
                  The capital of Lanao Del Sur, One of the five Autonomous
                  Provinces of Muslim Mindanao (ARMM) Provinces that have long
                  pushed for self-determination, is Marawi. Marawi is the commercial
                  hub of ARMM and has a population of more than 200,000 peaople, 96%
                  of whom are Muslim Maranaws. In the Philippines, it is also known as Islamic City. 
                </Box>
              </Box>
            </Box> 
          </Grid>
            <Grid item sm={6} xs={12}>
            <Box className='image'>
              <Box
                data-aos='fade-left'
                component='img'
                src={require('../assets/images/2.png')}
                className='image__img'
              />
              <Box
                className='image__overlay'
              >
                <Box className='image__description'>
                  For all of Muslim Mindanao, including the Maranaws,
                  Marawi has been a significant Source of pride. It was
                  well-known for its tall mosques, rows of substanstial
                  concrete homes, culture and art centers, and bustling
                  commercial avenues prior to the siege 
                </Box>
              </Box>
            </Box> 
            </Grid>
          <Grid item sm={6} xs={12}>
          <Box className='image'>
              <Box
                data-aos='zoom-in'
                component='img'
                src={require('../assets/images/3.png')}
                className='image__img'
              />
              <Box
                className='image__overlay'
              >
                <Box className='image__description'>
                  Although not to this extent, the population has always
                  endured conflict and violence. Because of our accustomedness
                  to this cycle of violence, one local stated, They expected
                  this to endure only for a few days, perhaps no more than five.
                  Many people left their belongings behind in the mistaken belief
                  that they would come back later. They are unable to go to their
                  houses, even now.
                </Box>
              </Box>
            </Box> 
          </Grid>
            <Grid item sm={6} xs={12}>
            <Box className='image'>
              <Box
                data-aos='zoom-in'
                component='img'
                src={require('../assets/images/4.png')}
                className='image__img'
              />
              <Box
                className='image__overlay'
              >
                <Box className='image__description'>
                  The "Battle of Marawi": Death and Destruction in the
                  Philippines is the first comprehensive account of the conflict's
                  impact on human rights. It details how militants affiliated width
                  IS singled out Christian citizens for the harshest violations,
                  such as at least 25 extrajudicial killings, widespread hostage-taking,
                  and substanstial looting of private property
                </Box>
              </Box>
            </Box> 
            </Grid>
            <Grid item sm={6} xs={12}>
            <Box className='image'>
              <Box
                data-aos='fade-right'
                component='img'
                src={require('../assets/images/5.png')}
                className='image__img'
              />
              <Box
                className='image__overlay'
              >
                <Box className='image__description'>
                  In less than a month, the violence forced 360,000
                  residents of Marawi and its environs from their homes.
                  For weeks or months, hundreds or perhaps thousands of 
                  civilians remained in the besieged city, either as 
                  captives or caught in the crossfire
                </Box>
              </Box>
            </Box> 
            </Grid>
            <Grid item sm={6} xs={12}>
            <Box className='image'>
              <Box
                data-aos='fade-left'
                component='img'
                src={require('../assets/images/6.png')}
                className='image__img'
              />
              <Box
                className='image__overlay'
              >
                <Box className='image__description'>
                  While the bangsamoro region experienced a revival of
                  civil society as a result of the crisis, the Philippines
                  government, through its social welfare departments and 
                  municipal authorities, gave humanitarian aid to Marawi
                  evaquees. According to the U?N Office for the coordination
                  of Humanitarian Affairs, 128 organizations offered a variety
                  of services during and after the siege, including food, money,
                  health care, water, and sanitation
                </Box>
              </Box>
            </Box> 
            </Grid>
        </Grid>
     
    </Box>
  )
  
  return content;
}
 
export default Header3;