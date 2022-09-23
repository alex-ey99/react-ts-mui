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
                {favoriteMovies.map((movie)=>(
                    <Grid item key={movie.imdbID} >
                        <FavMovie 
                            Title={movie.Title}
                            Year={movie.Year}
                            imdbID={movie.imdbID}
                            Type={movie.Type}
                            Poster={movie.Poster}
                        />
                    </Grid>
                ))}
            </Grid>
            
        </Box>
    )
}