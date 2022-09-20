import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { FavMovie } from "../components/FavMovie";
import { Movie, MovieInterface } from "../components/Movie";
import { useFavorite } from "../context/FavoriteContext";

export function Favorites(){

    const fav = useFavorite();

    return (
        
        <Box sx={{margin:"20px 20px"}}>
            <Typography variant="h3" sx={{padding:"20px"}}>Favorites</Typography>

            {fav.favMovies.map((movie, index)=>(
                <FavMovie key={index} {...movie} />
            ))}
        </Box>
    )
}