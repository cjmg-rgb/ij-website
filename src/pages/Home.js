import Box from "@mui/material/Box";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import Header1 from "../components/Header1";
import Header2 from "../components/Header2";
import Header3 from "../components/Header3";
import Header5 from "../components/Header4";

const Home = () => {
  
  const content = (
    <Box sx={{overflow: 'hidden'}}>
      <Header1 />
      <Header2 />
      <Header3 />
      <Header5 />
      <AboutUs />
      <Footer />
    </Box>
  )
  
  return content;
}
 
export default Home;