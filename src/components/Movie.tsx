import { Favorite } from "@mui/icons-material";
import {Button, Card, CardActions} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
// import { useFavorite } from "../context/FavoriteContext";
import { favMoviesState, favState } from "../context/FavState";
import { addMovie, increaseCount } from "../functions/favoriteMovie";
import { decreaseCount, deleteMovie } from "../functions/unfavoriteMovie";
import { MovieDetails, movieExample } from "../Interfaces/MovieDetails";
import { MovieInterface } from "../Interfaces/MovieInterface";
import { MovieCardTop } from "./MovieCardTop";
import { MovieShowMore } from "./MovieShowMore";


type favoriteType = "primary" | "error";

export function Movie(movie:MovieInterface){
    const API_URL: string = "http://www.omdbapi.com/?apikey=b1d991df&i=";
    const [movieDetails,setMovieDetails] = useState<MovieDetails>(movieExample);
    const [open,setOpen] = useState<boolean>(false);
    const [favorite,setFavorite] = useState<favoriteType>("primary");
    const [favoriteMovies, setFavoriteMovies] = useRecoilState(favMoviesState);
    const setFavoriteCount = useSetRecoilState(favState);
    // const fav = useFavorite();

    
    function getMovieDetails(movieId:string){
        // const response = await fetch(`${API_URL}${movieId}`);
        // const data =  await response.json();
        // const result:MovieDetails = data;
        // console.log(result);
        // setMovieDetails(result);
        // setOpen(true);

        axios.get(`${API_URL}${movieId}`)
            .then(function (response) {
                // handle success
                // console.log(response);
                const result:MovieDetails = response.data;
                setMovieDetails(result);
                setOpen(true);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }
    
    useEffect(()=>{
        if(favoriteMovies.find((element)=> element.imdbID===movie.imdbID)!=null){
            setFavorite("error");
        }
        else{
            setFavorite("primary");
        }
    },[movie])

    function handleClickRecoil(){
        if(favorite==="primary"){
            setFavorite("error");
            increaseCount(movie, favoriteMovies, setFavoriteCount);
            addMovie(movie, setFavoriteMovies);
           }
           else{
            setFavorite("primary");
            decreaseCount(movie, favoriteMovies, setFavoriteCount);
            deleteMovie(movie, setFavoriteMovies);
           }
    }
    
    // function handleClick(){
    //    if(favorite==="primary"){
    //     setFavorite("error");
    //     fav.increaseFav(movie);

    //    }
    //    else{
    //     setFavorite("primary");
    //     fav.decreaseFav(movie);
    //    }  
    // }

    return(

        <Card sx={{backgroundColor:"#DFF6FF", margin:"10px", width:"300px", display:"inline-block"}}>
            <MovieCardTop 
                Title={movie.Title}
                Year={movie.Year}
                imdbID={movie.imdbID}
                Type={movie.Type}
                Poster={movie.Poster}
            />
            <CardActions>
                <Button size="small" onClick={()=>getMovieDetails(movie.imdbID)}> Learn More</Button>
                <Button color={favorite} onClick={()=>handleClickRecoil()} variant="outlined" startIcon={<Favorite />}>
                    Favorite
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