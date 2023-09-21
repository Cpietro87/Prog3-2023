import { useState } from "react";
import Home from "./components/ReactRouter/Home";
import About from "./components/ReactRouter/About";
import Login from "./components/ReactRouter/Login";
import IntanceState from "./components/IntanciaEstado/InstanciaEstado";
import InstanceCounter from "./components/IntanciaEstado/InstanceCounter";
import InstanceTime from "./components/IntanciaEstado/InstanceTime";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/ReactRouter/utils/ProtectedRoute";
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
