
import Sidebar from "./Components/Sidebar.tsx";
import { Box, ControlBox, Flex } from "@chakra-ui/react";
import Freetrial from "./Components/signup/Freetrial";
import Welcome from "./Components/welcome/Welcome";
import ProjectPage from "./Components/projectpage/ProjectPage";
import { Routes, Route, Link } from "react-router-dom";
import { Dashboard } from './Components/dashboard/Dashboard';
import { Tasks } from './Components/Tasks/Tasks';
import { Peoples } from './Components/people/Peoples';
import { Reports } from './Components/reports/Reports';
import { Invoices } from './Components/invoices/Invoices';
import HomePart1 from "./Components/HomePage/HomePart1";

function App() {
  return (
    <Box>
      <Welcome/>
    </Box>
  );
}

export default App;
