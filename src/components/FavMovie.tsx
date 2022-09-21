import { Delete } from "@mui/icons-material";
import {Button, Card, CardActions} from "@mui/material";
import { useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
// import { useFavorite } from "../context/FavoriteContext";
import { favMoviesState, favState } from "../context/FavState";
import { decreaseCount, deleteMovie } from "../functions/unfavoriteMovie";
import { MovieDetails, movieExample } from "../Interfaces/MovieDetails";
import { MovieInterface } from "../Interfaces/MovieInterface";
import { MovieCardTop } from "./MovieCardTop";
import { MovieShowMore } from "./MovieShowMore";


export function FavMovie(movie:MovieInterface){
    const API_URL: string = "http://www.omdbapi.com/?apikey=b1d991df&i=";
    const [movieDetails,setMovieDetails] = useState<MovieDetails>(movieExample);
    const [open,setOpen] = useState<boolean>(false);
    const [favoriteMovies, setFavoriteMovies] = useRecoilState(favMoviesState);
    const setFavoriteCount = useSetRecoilState(favState);
    // const fav = useFavorite();

    async function getMovieDetails(movieId:string){
        const response = await fetch(`${API_URL}${movieId}`);
        const data =  await response.json();
        const result:MovieDetails = data;
        console.log(result);
        setMovieDetails(result);
        setOpen(true);
    }
    function handleClickRecoil(){
        decreaseCount(movie, favoriteMovies, setFavoriteCount);
        deleteMovie(movie, setFavoriteMovies);
    }
    
    // function handleClick(){
 
    //     fav.decreaseFav(movie);
    //    }


    
    return(

        <Card sx={{backgroundColor:"#DFF6FF", margin:"10px", width:"300px", display:"inline-block"}}>
            <MovieCardTop {...movie}/>
            <CardActions>
                <Button size="small" onClick={()=>getMovieDetails(movie.imdbID)}> Learn More</Button>
                <Button onClick={()=>handleClickRecoil()} variant="outlined" startIcon={<Delete />}>
                    Remove
                </Button>
                <MovieShowMore
                    movieDet= {movieDetails}
                    open= {open}
                    setOpen = {setOpen}
                />
            </CardActions>
        </Card>
        
        )
}