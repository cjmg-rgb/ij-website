import ArrowRightAlt from "@mui/icons-material/ArrowRightAlt";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

const Header1 = () => {

  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();

    navigate('/page2')
  }

  const content = (
    <Box>
      <Box
        component='img'
        src={require('../assets/images/head-image.jpg')}
        width='100%'
      />
      <Container>
        <Grid container spacing={1} mt={5} mb={5}>
          <Grid item sm={4}>
            <Link
              to='#header2'
              smooth
            >
              <Box 
                sx={{'&:hover': {
                  cursor: 'pointer',
                  transform: 'scale(1.1)',
                  transition: 'transform 0.50s ease-in-out'
                }}}
                component='video'
                src={require('../assets/clips/STORY OF CIVILIANS .mov')}
                width='100%'
                loop
                autoPlay
                // onMouseLeave={() => setControl1(false)}
                // onMouseEnter={() => setControl1(true)}
              />
            </Link>
          </Grid>
          <Grid item sm={4}>
          <Link
              to='#header3'
              smooth
            >
            <Box 
              component='video'
              src={require('../assets/clips/BEFORE AND AFTER.mov')}
              width='100%'
              loop
              autoPlay
              sx={{'&:hover': {
                cursor: 'pointer',
                transform: 'scale(1.1)',
                transition: 'transform 0.50s ease-out'
              }}}
              // onMouseLeave={() => setControl2(false)}
              // onMouseEnter={() => setControl2(true)}
            />
          </Link>
          </Grid>
          <Grid item sm={4}>
          <Link
              to='#header4'
              smooth
            >
            <Box 
              component='video'
              src={require('../assets/clips/DECLARATION .mov')}
              width='100%'
              loop
              autoPlay
              sx={{'&:hover': {
                cursor: 'pointer',
                transform: 'scale(1.1)',
                transition: 'transform 0.50s ease-out'
              }}}
              // onMouseLeave={() => setControl3(false)}
              // onMouseEnter={() => setControl3(true)}
            />
            </Link>
          </Grid>
        </Grid>
      </Container>
        <Typography
          // sx={{overflowY: {xs: 'auto', sm: 'auto'}, maxHeight: {xs: 5, sm: 5, md: '100%'}}}
          textAlign='center'
          bgcolor='#373030'
          color='#f2f2f2'
          p={3}
          mt={5} 
          mb={5}
        >
          A firefight broke out between Philippine government forces and armed non-state actors in Marawi City
          a city of 200,000 in the Autonomous Region in Muslim Mindanao, in the southern Philippines.
          The seizure of Marawi needs to be understood against a background of 
          existing separatist insurgency, poverty, marginalization 
          and lack of inclusive governance.
        </Typography>
        <Box display='flex' justifyContent='center'>
          <IconButton 
            onClick={handleClick}
          >
            <ArrowRightAlt fontSize='large' />
          </IconButton>
        </Box>
    </Box>
  )
  
  return content;
}
 
export default Header1;