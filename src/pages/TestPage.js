import Box from '@mui/material/Box';

const TestPage = () => {
  
  const content = (
    <Box>
      <Box className='image'>
        <Box
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
    </Box>
  )
  
  return content;
}
 
export default TestPage;