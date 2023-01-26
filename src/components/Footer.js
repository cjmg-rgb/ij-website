import { Typography } from "@mui/material";
import Box from "@mui/material/Box";

const Footer = () => {

  const year = new Date().getFullYear()
  
  const content = (
    <Box
      component='footer'
      textAlign='center'
    >
      <Typography
        variant='h6'
        margin={5}
      >
        All rights reserverd &copy; {year}
      </Typography>
    </Box>
  )
  
  return content;
}
 
export default Footer;