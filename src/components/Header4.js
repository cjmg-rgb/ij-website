import Box from "@mui/material/Box";

const Header4 = () => {
  
  const content = (
    <Box
      component='section'
      mb={5}
      id='header4'
    >
      <Box
        component='video'
        src={require('../assets/clips/DUTERTE_DOML.mp4')}
        width='100%'
        controls
        
      />
    </Box>
  )
  
  return content;
}
 
export default Header4;