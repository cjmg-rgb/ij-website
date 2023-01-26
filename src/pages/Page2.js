import ArrowCircleLeft from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRight from "@mui/icons-material/ArrowCircleRight";
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from "react-router-dom";

const Page2 = () => {

  const navigate = useNavigate();

  const handleClick = (text) => {
    
    if(text === 'left') {
      navigate('/')
    }
    if(text === 'right') { 
      navigate('/page3')
    }
  }
  
  const content = (
    <Box
      height='100%'
      sx={{diplay: 'grid', placeContent: 'center'}}
    >
      <Box
        component='video'
        src={require('../assets/clips/Transition.mp4')}
        width='100%'
        autoPlay
        controls
      />
      <Box display='flex' justifyContent='center' gap={3}>
          <IconButton
            onClick={() => handleClick('left')}
          >
            <ArrowCircleLeft fontSize='large' />
          </IconButton>
          <IconButton
            onClick={() => handleClick('right')}
          >
            <ArrowCircleRight fontSize='large' />
          </IconButton>
        </Box>
    </Box>
  )
  
  return content;
}
 
export default Page2;