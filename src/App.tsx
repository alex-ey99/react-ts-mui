import { useState } from 'react'
import {Routes, Route} from "react-router-dom";
import {Home} from "./pages/Home";
import {About} from "./pages/About";
import {Store} from "./pages/Store";
import {Navbar} from "./components/Navbar";
import { Box, Button, createTheme, ThemeProvider } from '@mui/material';
import { blue, orange } from '@mui/material/colors';

// https://mui.com/material-ui/customization/default-theme/

const myTheme = createTheme({
  palette: {
    background:{
      default: "#EEF1FF"
    },
    text:{
      primary: "black"
    }
  }
})
function App() {

  return (
    // <ThemeProvider theme={myTheme}>
      <Box  className="App" bgcolor={"background.default"} color={"text.primary"}>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/store" element={<Store/>}/>
            <Route path="/about" element={<About/>}/>
        </Routes>
      </Box>
    // </ThemeProvider>
    
  )
}

export default App
