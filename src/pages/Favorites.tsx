import { Box, Grid, Typography } from "@mui/material";
import { FavMovie } from "../components/FavMovie";
import { useFavorite } from "../context/FavoriteContext";

export function Favorites(){

    const fav = useFavorite();

    return (
        
        <Box sx={{margin:"20px 20px"}}>
            <Typography variant="h3" sx={{padding:"20px"}}>Favorites</Typography>
            <Grid 
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            >
                {fav.favMovies.map((movie, index)=>(
                    <Grid item>
                        <FavMovie key={index} {...movie} />
                    </Grid>
                ))}
            </Grid>
            
        </Box>
    )
}