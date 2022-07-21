

import Project from './Components/projectsNav/Project';
import Sidebar from "./Components/Sidebar.tsx";
import { Box } from "@chakra-ui/react";
import Freetrial from './Components/signup/Freetrial';

function App() {
  return (
    <Box>
   <Sidebar/>
  <Freetrial/>
   <Project/>
    </Box>
  );
}

export default App;
