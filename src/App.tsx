import { useState } from "react";
import Home from "./compontes/ReactRouter/Home";
import About from "./compontes/ReactRouter/About";
import Login from "./compontes/ReactRouter/Login";
import IntanceState from "./compontes/IntanciaEstado/InstanciaEstado";
import InstanceCounter from "./compontes/IntanciaEstado/InstanceCounter";
import InstanceTime from "./compontes/IntanciaEstado/InstanceTime";


function App() {

  const [path, setPath] = useState(window.location.pathname);

  return (
   <main>
    {path === '/instance' && <IntanceState/>}
    {path === '/instancecounter' && <InstanceCounter/>}
    {path === '/instancetiemer' && <InstanceTime/>}
    {path === '/' && <Home/>}
    {path === '/about' && <About/>}
    {path === '/login' && <Login/>}
   </main>
  );
}

export default App;
