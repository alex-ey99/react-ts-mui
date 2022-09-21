
import styled from "@emotion/styled";
import { Favorite } from "@mui/icons-material";
import { Box, Button, Card, CardActions, CardContent, CardMedia, Modal, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
// import { useFavorite } from "../context/FavoriteContext";
import { favMoviesState, favState } from "../context/FavState";
import { addMovie, increaseCount } from "../functions/favoriteMovie";
import { decreaseCount, deleteMovie } from "../functions/unfavoriteMovie";
import { MovieDetails, movieExample } from "../Interfaces/MovieDetails";
import { MovieInterface } from "../Interfaces/MovieInterface";




export const CustomModal = styled(Modal)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
});


type favoriteType = "primary" | "error";

export function Movie(movie:MovieInterface){
    const API_URL: string = "http://www.omdbapi.com/?apikey=b1d991df&i=";
    const [movieDetails,setMovieDetails] = useState<MovieDetails>(movieExample);
   
    async function getMovieDetails(movieId:string){
        const response = await fetch(`${API_URL}${movieId}`);
        const data =  await response.json();
        const result:MovieDetails = data;
        console.log(result);
        setMovieDetails(result);
        setOpen(true);
    }
    
    const [open,setOpen] = useState<boolean>(false);
    const [favorite,setFavorite] = useState<favoriteType>("primary");
    // const fav = useFavorite();


    const [favoriteMovies, setFavoriteMovies] = useRecoilState(favMoviesState);
    const setFavoriteCount = useSetRecoilState(favState);

    useEffect(()=>{
        if(favoriteMovies.find((element)=> element.imdbID===movie.imdbID)!=null){
            setFavorite("error");
        }
        else{
            setFavorite("primary");
        }
    },[movie])

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
                
            </CardContent>
            <CardActions>
                <Button size="small" onClick={()=>getMovieDetails(movie.imdbID)}> Learn More</Button>
                <Button color={favorite} onClick={()=>handleClickRecoil()} variant="outlined" startIcon={<Favorite />}>
                    Favorite
                </Button>
                <CustomModal
                    open={open}
                    onClose={()=>setOpen(false)}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    >
                    <Box width={400} bgcolor={"background.default"} color={"text.primary"} padding={3} borderRadius={5}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            {movieDetails.Title}
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            Year: {movieDetails.Year}
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            Actors: {movieDetails.Actors}
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            Runtime: {movieDetails.Runtime}
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            Genre: {movieDetails.Genre}
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            Director: {movieDetails.Director}
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            Plot: {movieDetails.Plot}
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            Awards: {movieDetails.Awards}
                        </Typography>

                    </Box>
                </CustomModal>
            </CardActions>
        </Card>
        
        )
}