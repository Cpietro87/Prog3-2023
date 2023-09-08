import { useState } from "react";
import Home from "./compontes/ReactRouter/Home";
import About from "./compontes/ReactRouter/About";
import Login from "./compontes/ReactRouter/Login";
import IntanceState from "./compontes/IntanciaEstado/InstanciaEstado";
import InstanceCounter from "./compontes/IntanciaEstado/InstanceCounter";
import InstanceTime from "./compontes/IntanciaEstado/InstanceTime";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./compontes/ReactRouter/utils/ProtectedRoute";
import { useLocalStorage } from "react-use";


function App() {

  const [user, setUser] = useLocalStorage('user')

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRoute canActivate={user} redirectPath="/login"/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
        </Route>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  
  );
}

export default App;
