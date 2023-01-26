import Box from "@mui/material/Box";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const RootLayout = () => {
  
  const content = (
    <Box>
      <Navbar />
      <Outlet />
    </Box>
  )
  
  return content;
}
 
export default RootLayout;