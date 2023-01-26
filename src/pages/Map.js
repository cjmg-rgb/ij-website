import ArrowCircleLeft from '@mui/icons-material/ArrowCircleLeft';
import LocationOn from '@mui/icons-material/LocationOn';
import PlayCircle from '@mui/icons-material/PlayCircle';
import Switch from '@mui/material/Switch';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Modal from '@mui/material/Modal';
import Tooltip from '@mui/material/Tooltip';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import SwitchPage from '../components/SwitchPage';

const Map = () => {

  const navigate = useNavigate();

  const [modal1, setModal1] = useState(false)
  const [modal2, setModal2] = useState(false)
  const [modal3, setModal3] = useState(false)
  const [modal4, setModal4] = useState(false)
  const [modal5, setModal5] = useState(false)
  const [modal6, setModal6] = useState(false)
  const [modal7, setModal7] = useState(false)

  const [checkChecked, setCheckChecked] = useState(false);

  const handleClick = () => {
    navigate('/page3')
  }

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
    <Box
      position='relative'
      sx={{overflow: 'auto'}}
    >
      <Box
        component='img'
        src={require('../assets/images/map.png')}
        width='1200px'
        minWidth='100%'
      />
      {/* Tooltip1 */}
      {!checkChecked ? (<Tooltip placement="top" title={
        <>
          <Box
            component='img'
            src={require('../assets/images/O1.png')}
            width='100%'
          />
          <IconButton sx={{color: 'white', '&:hover': {color: 'red'}}} onClick={() => handlePlay('AVP1')}>
            <PlayCircle />
          </IconButton>
        </>
      }>
        <IconButton sx={{color: 'red', position: 'absolute', left: '43%', top: '50%'}}
        >
          <LocationOn />
        </IconButton>
      </Tooltip>) : null}

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
      {/* Tooltip2 */}
      {!checkChecked ? (<Tooltip placement="top" title={
        <>
          <Box
            component='img'
            src={require('../assets/images/O4.png')}
            width='100%'
          />
          <IconButton sx={{color: 'white', '&:hover': {color: 'red'}}} onClick={() => handlePlay('AVP4')}>
            <PlayCircle />
          </IconButton>
        </>
      }>

        <IconButton sx={{color: 'red', position: 'absolute', left: '34%', top: '30%'}}
        >
          <LocationOn />
        </IconButton>
      </Tooltip>) : null}

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

      {/* Tooltip3 */}
      {!checkChecked ? (<Tooltip placement="top" title={
        <>
          <Box
            component='img'
            src={require('../assets/images/O3.png')}
            width='100%'
          />
          <IconButton sx={{color: 'white', '&:hover': {color: 'red'}}} onClick={() => handlePlay('AVP3')}>
            <PlayCircle />
          </IconButton>
        </>
      }>

        <IconButton sx={{color: 'red', position: 'absolute', left: '43.5%', top: '20%'}}
        >
          <LocationOn />
        </IconButton>
      </Tooltip>) : null}

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

      {/* Tooltip4 */}
      {!checkChecked ? (<Tooltip placement="top" title={
        <>
          <Box
            component='img'
            src={require('../assets/images/O2.png')}
            width='100%'
          />
          <IconButton sx={{color: 'white', '&:hover': {color: 'red'}}} onClick={() => handlePlay('AVP2')}>
            <PlayCircle />
          </IconButton>
        </>
      }>

        <IconButton sx={{color: 'red', position: 'absolute', left: '53.5%', top: '57%'}}
        >
          <LocationOn />
        </IconButton>
      </Tooltip>) : null}

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

      {/* Tooltip5 */}
      {!checkChecked ? (<Tooltip placement="top" title={
        <>
          <Box
            component='img'
            src={require('../assets/images/O6.png')}
            width='100%'
          />
          <IconButton sx={{color: 'white', '&:hover': {color: 'red'}}} onClick={() => handlePlay('AVP6')}>
            <PlayCircle />
          </IconButton>
        </>
      }>

        <IconButton sx={{color: 'red', position: 'absolute', left: '68%', top: '63%'}}
        >
          <LocationOn />
        </IconButton>
      </Tooltip>) : null}

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

      {/* Tooltip6 */}
      {!checkChecked ? <Tooltip placement="top" title={
        <>
          <Box
            component='img'
            src={require('../assets/images/O5.png')}
            width='100%'
          />
          <IconButton sx={{color: 'white', '&:hover': {color: 'red'}}} onClick={() => handlePlay('AVP5')}>
            <PlayCircle />
          </IconButton>
        </>
      }>

        <IconButton sx={{color: 'red', position: 'absolute', left: '16.5%', top: '75%'}}
        >
          <LocationOn />
        </IconButton>
      </Tooltip> : null}

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

      {/* Tooltip7 */}
      {!checkChecked ? <Tooltip placement="top" title={
        <>
          <Box
            component='img'
            src={require('../assets/images/O7.png')}
            width='100%'
          />
          <IconButton sx={{color: 'white', '&:hover': {color: 'red'}}} onClick={() => handlePlay('AVP7')}>
            <PlayCircle />
          </IconButton>
        </>
      }>

        <IconButton sx={{color: 'red', position: 'absolute', left: '36.5%', top: '72%'}}
        >
          <LocationOn />
        </IconButton>
      </Tooltip> : null}

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

      <Box display='flex' justifyContent='center' gap={3} alignItems='center'>
          <IconButton
            onClick={handleClick}
          >
            <ArrowCircleLeft fontSize='large' />
          </IconButton>
          <Switch
            checked={checkChecked}
            onChange={e => setCheckChecked(!checkChecked)}
            inputProps={{ 'aria-label': 'controlled' }}
          />
      </Box>
      {checkChecked ? (<SwitchPage />) : null}
    </Box>
  )
  
  return content;
}
 
export default Map;