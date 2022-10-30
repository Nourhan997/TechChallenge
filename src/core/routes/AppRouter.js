//REACT UTILITIES
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import CheckConnection from "./CheckConnection";
//LOGIN COMPONENT
import Login from "../../components/login/Login";
import NavigationBar from "../../components/navigationBar/NavigationBar";
import PageNotFound from "../../layout/response-messages/PageNotFound";

import Dashboard from "../../components/home/dashboard/Dashboard";
import SideBarLayout from "../../components/sidebar/SideBarLayout";
import ProtectedRoutes from "./ProtectedRoutes";
import Surveys from "../../components/home/surveys/list";
import Details from "../../components/home/surveys/details";

function AppRouter(props) {
  useEffect(() => {}, []);
  return (
    <BrowserRouter>
      <NavigationBar />

      <Routes>
        <Route element={<ProtectedRoutes shouldbeloggedIn={true} />}>
          <Route path={`/`} element={<SideBarLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="surveys" element={<Surveys />} />
            <Route path="details/:id" element={<Details />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Route>
        <Route element={<ProtectedRoutes shouldbeloggedIn={false} />}>
          <Route path={`/login`} element={<Login />} />
          <Route path="/" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
