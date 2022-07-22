import "./App.css";
import Sidebar from "./Components/Sidebar.tsx";
import { Box } from "@chakra-ui/react";
import Freetrial from "./Components/signup/Freetrial";
import { MainpageRoutes } from "./Routes/MainpageRoutes";
import Navbar from "./Components/Navbar/Navbar.tsx";
import HomePart1 from "./Components/HomePage/HomePart1";

function App() {
  return (
      <Box className="App">
      <Box>
          <Navbar />
          <HomePart1/>
      </Box>
        <Sidebar/>
        <Freetrial/>
      </Box>
  );
}

export default App;
