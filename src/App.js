import Project from "./Components/projectsNav/Project";
import Sidebar from "./Components/Sidebar.tsx";
import { Box, ControlBox, Flex } from "@chakra-ui/react";
import Freetrial from "./Components/signup/Freetrial";

function App() {
  return (
    <Box>
      <Freetrial />
      <Flex>
        <Sidebar />
        <Project />
      </Flex>
    </Box>
  );
}

export default App;
