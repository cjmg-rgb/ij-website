import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography'

const AboutUs = () => {

  const content = (
    <Box className='bg-image' textAlign='center' py={10} mb={5}>
      <Typography
        variant='h5'
        fontWeight='bolder'
        
      >
        About Us
      </Typography>
      <Typography
        fontWeight='bold'
        variant="subtitle1"
        p={3}
      >
        Aletheia serves as a useful source of information and motivation. 
        The Aletheia group consists of Second year Broadcasting students from La Verdad Christian College- Caloocan, 
        they finally decided to own the role and be intentional about it. 
        Aletheia is disclosure of truth with a mission to give others a taste of their thoughts and findings. 
        This website has evolved into an interactive site 
        filled with information about certain topics with various information.

        Take some time to explore the website and find what happened to Marawi way back 2017.
        Read and Enjoy!
      </Typography>
    </Box>
  )
  
  return content;
}
 
export default AboutUs;