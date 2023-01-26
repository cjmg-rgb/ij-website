import PlayCircle from "@mui/icons-material/PlayCircle";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Modal from "@mui/material/Modal";
import { useState } from "react";

const Header2 = () => {

  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);
  const [modal4, setModal4] = useState(false);

  const handlePlay = (audio) => {
    if(audio === 'audio1') {
      setModal1(true)
    }
    if(audio === 'audio2') {
      setModal2(true)
    }
    if(audio === 'audio3') {
      setModal3(true)
    }
    if(audio === 'audio4') {
      setModal4(true)
    }
  }
  
  const content = (
    <Box id='header2' component='section'>
      <Box
        position='relative'
      >
        <Box
          component='img'
          src={require('../assets/images/rec1.png')}
          width='100%'
        />
        <IconButton sx={{position: 'absolute', left: '5.5%', top: '9.5%', backgroundColor: '#fff', '&:hover': {color: '#fff'}}} onClick={() => handlePlay('audio1')}>
          <PlayCircle fontSize="large" />
        </IconButton>
        <IconButton sx={{position: 'absolute', left: '5.5%', top: '52%', backgroundColor: '#fff', '&:hover': {color: '#fff'}}} onClick={() => handlePlay('audio2')}>
          <PlayCircle fontSize="large" />
        </IconButton>
      </Box>
      <Box
        position='relative'
      >
        <Box
          component='img'
          src={require('../assets/images/rec2.png')}
          width='100%'
        />
        <IconButton sx={{position: 'absolute', left: '5.5%', top: '16%', backgroundColor: '#fff', '&:hover': {color: '#fff'}}} onClick={() => handlePlay('audio3')}>
          <PlayCircle fontSize="large" />
        </IconButton>
        <IconButton sx={{position: 'absolute', left: '5.5%', top: '40.5%', backgroundColor: '#fff', '&:hover': {color: '#fff'}}} onClick={() => handlePlay('audio4')}>
          <PlayCircle fontSize="large" />
        </IconButton>
      </Box>
      <Modal
          open={modal1}
          onClose={() => setModal1(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            component='audio'
            src={require('../assets/audios/Copy of Ara - 1.mp3')}
            width='100%'
            height='100%'
            autoPlay
            controls
          />
        </Modal>
      <Modal
          open={modal2}
          onClose={() => setModal2(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            component='audio'
            src={require('../assets/audios/Copy of Ara - 2 .mp3')}
            width='100%'
            height='100%'
            autoPlay
            controls
          />
        </Modal>
      <Modal
          open={modal3}
          onClose={() => setModal3(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            component='audio'
            src={require('../assets/audios/Copy of Ara - 3 .mp3')}
            width='100%'
            height='100%'
            autoPlay
            controls
          />
        </Modal>
      <Modal
          open={modal4}
          onClose={() => setModal4(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            component='audio'
            src={require('../assets/audios/Copy of Ara - 4.mp3')}
            width='100%'
            height='100%'
            autoPlay
            controls
          />
        </Modal>
    </Box>
  )
  
  return content;
}
 
export default Header2;