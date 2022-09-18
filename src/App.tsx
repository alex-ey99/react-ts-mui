import { useState } from 'react'
import {Routes, Route} from "react-router-dom";
import {Home} from "./pages/Home";
import {About} from "./pages/About";
import {Store} from "./pages/Store";
import {Navbar} from "./components/Navbar";
import Box from '@mui/material/Box';

function App() {

  return (
    <div className="App">
        <Navbar/>
        <Box>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/store" element={<Store/>}/>
                <Route path="/about" element={<About/>}/>
            </Routes>
        </Box>



    </div>
  )
}

export default App
