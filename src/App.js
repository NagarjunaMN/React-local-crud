import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./component/Menu";
import Home from "./component/Home";
import Create from "./component/Create";
import Update from "./component/Update";
import Pnf from "./component/Pnf";
import Register from "./component/Register";
import Login from "./component/Login";
import ProtectedRoute from "./AuthGuard/ProtectedRoute";
import {ToastContainer} from "react-toastify"

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <ToastContainer autoClose={4000} position={"top-right"}/>
      <Routes>
          <Route element = {< ProtectedRoute />}>
              <Route path={'/'} element={<Home />} />          
              <Route path={'/create'} element={<Create />} />
              <Route path={'/update/:id'} element={<Update />} />
          </Route>
          <Route path={'/login'} element={<Login />} />
          <Route path={'/register'} element={<Register />} />
          <Route path={'/*'} element={<Pnf />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
