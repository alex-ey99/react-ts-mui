
import {Routes, Route} from "react-router-dom";
import {Home} from "./pages/Home";
import {About} from "./pages/About";
import {MovieLibrary} from "./pages/MovieLibrary";
import {Navbar} from "./components/Navbar";
import { Box, createTheme} from '@mui/material';
import { Favorites } from './pages/Favorites';
// import { FavoriteProvider } from './context/FavoriteContext';
import { RecoilRoot } from "recoil";
import { Admin } from "./pages/Admin";


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
   
    //now the entire app has access to everyhting inside the FavoriteProvider
  // <FavoriteProvider>
    <RecoilRoot>
       <Box  className="App" bgcolor={"background.default"} color={"text.primary"}>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
            <Route path="/movielibrary" element={<MovieLibrary/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/favorites" element={<Favorites/>}/>
            <Route path="/admin" element ={<Admin/>}/>
        </Routes>
      </Box>
    </RecoilRoot>
  // </FavoriteProvider>

    
  )
}

export default App
