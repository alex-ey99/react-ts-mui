import { Box, Grid, Typography } from "@mui/material";
import { useRecoilValue } from "recoil";
import { FavMovie } from "../components/FavMovie";
// import { useFavorite } from "../context/FavoriteContext";
import { favMoviesState } from "../context/FavState";

export function Favorites(){

    // const fav = useFavorite();
    const favoriteMovies = useRecoilValue(favMoviesState);

    return (
        
        <Box sx={{margin:"20px 20px"}}>
            <Typography variant="h3" sx={{padding:"20px"}}>Favorites</Typography>
            <Grid 
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            >
                {favoriteMovies.map((movie, index)=>(
                    <Grid item>
                        <FavMovie key={movie.imdbID} {...movie} />
                    </Grid>
                ))}
            </Grid>
            
        </Box>
    )
}