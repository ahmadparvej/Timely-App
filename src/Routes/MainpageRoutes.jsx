import React from "react";
import { Routes, Route} from "react-router-dom";

import { Login } from "../Components/Login";



export const MainpageRoutes = () => {
  return (
    <div>
      
      <Routes>
        <Route path={"/login"} element={<Login/>}/>
      </Routes>
    </div>
  );
};
