import { CardContent, CardMedia, Typography } from "@mui/material";
import { MovieInterface } from "../Interfaces/MovieInterface";

export function MovieCardTop(movie:MovieInterface){
    return(
        <>
        <CardMedia
                component="img"
                height="450px"
                width="300px"
                image={movie.Poster}
                alt={movie.Title}
            />
            <CardContent>
                <Typography sx={{fontSize: 16}} color="text.secondary" gutterBottom>{movie.Type}</Typography>
                <Typography variant="h5" sx={{overflow:"hidden", whiteSpace:"nowrap", textOverflow:"ellipsis"}}>{movie.Title}</Typography>
                <Typography color="text.secondary" component="div" >{movie.Year}</Typography>
                
            </CardContent>
        </>
        
    )
}