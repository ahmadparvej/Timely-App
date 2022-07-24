import React from 'react'
import Sidebar from "../Components/Sidebar.tsx";
import {Routes, Route, Outlet } from "react-router-dom";
import { Tasks } from './Tasks/Tasks';
import ProjectPage from './projectpage/ProjectPage';
import { Peoples } from './people/Peoples';
import { Reports } from './reports/Reports';
import { Invoices } from './invoices/Invoices';
import { Box } from '@chakra-ui/react';
import { Flex } from '@chakra-ui/react';

export const SidebarOverlay = () => {
  return (
    <Flex>
    <Sidebar/>
    <Outlet/>
    </Flex>
  )
}
