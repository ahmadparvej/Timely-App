import { Box} from "@chakra-ui/react";
import Freetrial from "./Components/signup/Freetrial";
import Welcome from "./Components/welcome/Welcome";
import Login from "./Components/login/Login";
import ProjectPage from "./Components/projectpage/ProjectPage";

import { Routes, Route } from "react-router-dom";

import { Dashboard } from "./Components/dashboard/Dashboard";
import { Tasks } from "./Components/Tasks/Tasks";
import { Peoples } from "./Components/people/Peoples";
import { Reports } from "./Components/reports/Reports";
import { Invoices } from "./Components/invoices/Invoices";
import { NewProject } from "./Components/NewProject/NewProject";
import { SidebarOverlay } from "./Components/SidebarOverlay";
import HomePage from "./Components/HomePage/HomePage.jsx";

function App() {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/freetrial" element={<Freetrial />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/new" element={<NewProject />} />
        <Route path="dashboard" element={<SidebarOverlay />}>
          <Route path="" element={<Dashboard />} />
          <Route path="hours" element={<Dashboard />} />
          <Route path="tasks" element={<Tasks />} />
          <Route path="projects" element={<ProjectPage />} />
          <Route path="peoples" element={<Peoples />} />
          <Route path="reports" element={<Reports />} />
          <Route path="invoices" element={<Invoices />} />
        </Route>
      </Routes>
    </Box>
  );
}

export default App;
