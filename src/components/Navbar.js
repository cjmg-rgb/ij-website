import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import { Link } from 'react-router-dom';

const Navbar = () => {
  
  const content = (
    <AppBar position="sticky" color="inherit">
      <Container>
        <Toolbar disableGutters>
          <Link
            to='/'
          >
            <Box
              component='img'
              src={require('../assets/images/Logo.png')}
              width='115px'
            />
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  )
  
  return content;
}
 
export default Navbar;