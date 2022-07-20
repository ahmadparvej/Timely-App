
import './App.css';
import Sidebar from "./Components/Sidebar.tsx";
import { Box } from "@chakra-ui/react";

import Freetrial from './Components/signup/Freetrial';

function App() {
  return (
    <Box className="App">
   <Sidebar/>
  <Freetrial/>
    </Box>
  );
}

export default App;
