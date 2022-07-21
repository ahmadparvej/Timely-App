
import Sidebar from "./Components/Sidebar.tsx";
import { Box, ControlBox, Flex } from "@chakra-ui/react";
import Freetrial from "./Components/signup/Freetrial";
import ProjectPage from "./Components/projectpage/ProjectPage";

function App() {
  return (
    <Box>
      <Freetrial />
      <Flex>
        <Sidebar />
      <ProjectPage/>
      </Flex>
    </Box>
  );
}

export default App;
