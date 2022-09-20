import { Favorite, Movie, ShoppingCart } from "@mui/icons-material";
import {  AppBar, Badge, Box, Link, styled, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import Button from '@mui/material/Button';
import { useContext } from "react";
import { useFavorite } from "../context/FavoriteContext";

const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-center",
    gap: "10px"
})


export function Navbar(){
    const fav = useFavorite();
    return (
        
            <AppBar position="sticky" sx={{backgroundColor: "white", color:"black"}}>
                <StyledToolbar>
                    
                    <Typography variant="body1" sx={{display:{xs:"none",sm:"block"}}}>
                        Library
                    </Typography>
                    <Movie sx={{display:{xs:"block",sm:"none"}}}/>
                    <Button component={NavLink} to="/">Home</Button>
                    <Button component={NavLink} to="/about" >About</Button>
                    <Button component={NavLink} to="/store" >Store</Button>
                    <Badge component={NavLink} to="/favorites" badgeContent={fav.favCount} color="primary">
                        <Favorite color="action"/>
                    </Badge>
                </StyledToolbar>
                
            </AppBar>
            
        
    )
}



  