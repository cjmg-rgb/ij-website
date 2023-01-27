import { Box, Container, Modal } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useState } from "react";

const SwitchPage = () => {

  const [modal1, setModal1] = useState(false)
  const [modal2, setModal2] = useState(false)
  const [modal3, setModal3] = useState(false)
  const [modal4, setModal4] = useState(false)
  const [modal5, setModal5] = useState(false)
  const [modal6, setModal6] = useState(false)
  const [modal7, setModal7] = useState(false)

  const handlePlay = (avp) => {
    if(avp === 'AVP1') {
      setModal1(true)
    }
    if(avp === 'AVP2') {
      setModal2(true)
    }
    if(avp === 'AVP3') {
      setModal3(true)
    }
    if(avp === 'AVP4') {
      setModal4(true)
    }
    if(avp === 'AVP5') {
      setModal5(true)
    }
    if(avp === 'AVP6') {
      setModal6(true)
    }
    if(avp === 'AVP7') {
      setModal7(true)
    }
  }
  
  const content = (
    <Container>
      <Grid container gap={3} justifyContent='center'>
        <Grid item xs={12} sm={5} sx={{
        transition: 'transform 0.50s ease-in-out',
        boxShadow: '0 0 5px 0 black',
        cursor: 'pointer',
        '&:hover': {
          transform: 'scale(1.1)'
        }}}
        onClick={() => handlePlay('AVP1')}
        >
          <Box
            component='img'
            src={require('../assets/images/O1.png')}
            width='100%'
          />
        </Grid>
        <Grid item xs={12} sm={5} sx={{
        transition: 'transform 0.50s ease-in-out',
        boxShadow: '0 0 5px 0 black',
        cursor: 'pointer',
        '&:hover': {
          transform: 'scale(1.1)'
        }}}
        onClick={() => handlePlay('AVP2')}
        >
          <Box
            component='img'
            src={require('../assets/images/O2.png')}
            width='100%'
          />
        </Grid>
        <Grid item xs={12} sm={5} sx={{
        transition: 'transform 0.50s ease-in-out',
        boxShadow: '0 0 5px 0 black',
        cursor: 'pointer',
        '&:hover': {
          transform: 'scale(1.1)'
        }}}
        onClick={() => handlePlay('AVP3')}
        >
          <Box
            component='img'
            src={require('../assets/images/O3.png')}
            width='100%'
          />
        </Grid>
        <Grid item xs={12} sm={5} sx={{
        transition: 'transform 0.50s ease-in-out',
        boxShadow: '0 0 5px 0 black',
        cursor: 'pointer',
        '&:hover': {
          transform: 'scale(1.1)'
        }}}
        onClick={() => handlePlay('AVP4')}
        >
          <Box
            component='img'
            src={require('../assets/images/O4.png')}
            width='100%'
          />
        </Grid>
        <Grid item xs={12} sm={5} sx={{
        transition: 'transform 0.50s ease-in-out',
        boxShadow: '0 0 5px 0 black',
        cursor: 'pointer',
        '&:hover': {
          transform: 'scale(1.1)'
        }}}
        onClick={() => handlePlay('AVP5')}
        >
          <Box
            component='img'
            src={require('../assets/images/O5.png')}
            width='100%'
          />
        </Grid>
        <Grid item xs={12} sm={5} sx={{
        transition: 'transform 0.50s ease-in-out',
        boxShadow: '0 0 5px 0 black',
        cursor: 'pointer',
        '&:hover': {
          transform: 'scale(1.1)'
        }}}
        onClick={() => handlePlay('AVP6')}
        >
          <Box
            component='img'
            src={require('../assets/images/O6.png')}
            width='100%'
          />
        </Grid>
        <Grid item xs={12} sm={5} sx={{
        transition: 'transform 0.50s ease-in-out',
        boxShadow: '0 0 5px 0 black',
        cursor: 'pointer',
        '&:hover': {
          transform: 'scale(1.1)'
        }}}
        onClick={() => handlePlay('AVP7')}
        >
          <Box
            component='img'
            src={require('../assets/images/O7.png')}
            width='100%'
          />
        </Grid>
      </Grid>

      <Modal
          open={modal1}
          onClose={() => setModal1(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            component='video'
            src={require('../assets/clips/AVP 1.mp4')}
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
            component='video'
            src={require('../assets/clips/AVP 4.mp4')}
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
            component='video'
            src={require('../assets/clips/AVP 3.mp4')}
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
            component='video'
            src={require('../assets/clips/AVP 2.mp4')}
            width='100%'
            height='100%'
            autoPlay
            controls
          />
        </Modal>

        <Modal
          open={modal6}
          onClose={() => setModal6(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            component='video'
            src={require('../assets/clips/AVP 6.mp4')}
            width='100%'
            height='100%'
            autoPlay
            controls
          />
        </Modal>

        <Modal
          open={modal5}
          onClose={() => setModal5(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            component='video'
            src={require('../assets/clips/AVP 5.mp4')}
            width='100%'
            height='100%'
            autoPlay
            controls
          />
        </Modal>

        <Modal
          open={modal7}
          onClose={() => setModal7(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            component='video'
            src={require('../assets/clips/AVP 7.mp4')}
            width='100%'
            height='100%'
            autoPlay
            controls
          />
        </Modal>
    </Container>
  )
  
  return content;
}
 
export default SwitchPage;