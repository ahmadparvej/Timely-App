import Project from "./Components/projectsNav/Project";
import Sidebar from "./Components/Sidebar.tsx";
import { Box, ControlBox, Flex } from "@chakra-ui/react";
import Freetrial from "./Components/signup/Freetrial";
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
      <Box>
         <HomePart1/>
      </Box>
      {/* <Flex>
        <Sidebar />
        <Routes>
          <Route path="/hours" element={<Dashboard/>} />
          <Route path="/tasks" element={<Tasks/>} />
          <Route path="/projects" element={<Project/>} />
          <Route path="/peoples" element={<Peoples/>} />
          <Route path="/reports" element={<Reports/>} />
          <Route path="/invoices" element={<Invoices/>} />
        </Routes>
      </Flex> */}
      {/* <Freetrial /> */}
    </Box>
  );
}

export default App;
