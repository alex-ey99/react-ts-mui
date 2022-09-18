
import { Favorite } from "@mui/icons-material";
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";


export interface MovieInterface{
    "Title": string;
    "Year": string;
    "imdbID": string;
    "Type": string;
    "Poster": string;

}

export function Movie(movie:MovieInterface){

    return(
        <Card sx={{backgroundColor:"#DFF6FF", margin:"10px", width:"300px", display:"inline-block"}}>
            <CardMedia
                component="img"
                height="450px"
                width="300px"
                image={movie.Poster}
                alt={movie.Title}
            />
            <CardContent>
                <Typography sx={{fontSize: 16}} color="text.secondary" gutterBottom>Movie</Typography>
                <Typography variant="h5" sx={{overflow:"hidden", whiteSpace:"nowrap", textOverflow:"ellipsis"}}>{movie.Title}</Typography>
                <Typography color="text.secondary" component="div" >{movie.Year}</Typography>
                {/* <img src={movie.Poster}></img> */}
            </CardContent>
            <CardActions>
                <Button size="small"> Learn More</Button>
                <Button variant="outlined" startIcon={<Favorite />}>
                    Favorite
                </Button>
            </CardActions>
        </Card>
        
        )
}