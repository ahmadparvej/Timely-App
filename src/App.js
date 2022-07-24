import Sidebar from "./Components/Sidebar.tsx";
import { Box, ControlBox, Flex } from "@chakra-ui/react";
import Freetrial from "./Components/signup/Freetrial";
import Welcome from "./Components/welcome/Welcome";
import Login from "./Components/login/Login";
import ProjectPage from "./Components/projectpage/ProjectPage";

import { Routes, Route, Link } from "react-router-dom";

import { Dashboard } from "./Components/dashboard/Dashboard";
import { Tasks } from "./Components/Tasks/Tasks";
import { Peoples } from "./Components/people/Peoples";
import { Reports } from "./Components/reports/Reports";
import { Invoices } from "./Components/invoices/Invoices";
import { NewProject } from "./Components/NewProject/NewProject";
import { SidebarOverlay } from './Components/SidebarOverlay';


function App() {
  return (
    <Box>
      <Welcome/>
        <Routes>
          <Route path="/login" element={<Freetrial/>}/>
          <Route path="/login" element={<Freetrial/>}/>
          <Route path="dashboard" element={<SidebarOverlay/>}>
            <Route path="hours" element={<Dashboard/>} />
            <Route path="tasks" element={<Tasks/>} />
            <Route path="projects" element={<ProjectPage/>} />
            <Route path="peoples" element={<Peoples/>} />
            <Route path="reports" element={<Reports/>} />
            <Route path="invoices" element={<Invoices/>} />
          </Route>
          
        </Routes>

    </Box>
  );
}

export default App;
