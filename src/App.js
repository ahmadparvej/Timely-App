
import './App.css';
import Sidebar from "./Components/Sidebar.tsx";
import { Box, ChakraProvider } from "@chakra-ui/react";
import Navbar from "./Components/Navbar.tsx";
import Freetrial from './Components/signup/Freetrial';
import { Route, Routes } from 'react-router-dom';
// import { WithSubnavigation } from './Components/Navbar';
import { Login } from './Components/Login';


function App() {


  return (
    <ChakraProvider>
    <Box className="App">
      <Box >
         <Navbar/>
      </Box>
      
      <Routes>
        <Route path={"/login"} element={<Login/>}/>
      </Routes>
      {/* <Sidebar/> */}
       {/* <Freetrial/> */}
    </Box>
    </ChakraProvider>
  );
}

export default App;
