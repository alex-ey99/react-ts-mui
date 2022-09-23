import { Search} from "@mui/icons-material";
import {Box,Grid,IconButton, TextField, Typography } from "@mui/material";
import React, {useState } from "react";
import { Movie} from "../components/Movie";
import { MovieInterface } from "../Interfaces/MovieInterface";
import axios from 'axios';


export function MovieLibrary() {
    const API_URL: string = "http://www.omdbapi.com/?apikey=b1d991df&s=";
    // http://www.omdbapi.com/?apikey=b1d991df&s=batman&type=movie
    const [movies,setMovies] = useState<MovieInterface[]>([]);
    const [search,setSearch] = useState<string>("");
    const [show, setShow] = useState<boolean>(false);
   
    function getMovies(title:string){

        axios.get(`${API_URL}${title}&type=movie`)
            .then(function (response) {
                // handle success
                // console.log(response);
                const results:MovieInterface[] = response.data.Search;
                if(results===undefined){
                    // console.log("None found");
                    setShow(true);
                }
                else{
                    // console.log(results);  
                    setShow(false);
                    setMovies(results);
                    
                }
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });

        // fetch(`${API_URL}${title}&type=movie`)
        //     .then(response => {
        //         return response.json();
        //     })
        //     .then(data=> {
        //         const results:MovieInterface[] = data.Search;
        //         if(results===undefined){
        //             // console.log("None found");
        //             setShow(true);
        //         }
        //         else{
        //             // console.log(results);
        //             setShow(false);
        //             setMovies(results);
        //         }

        //     }).catch((error)=>{
        //         console.log(error);
        //     });
        
    }
    
    function keyDownHandler(event: React.KeyboardEvent<HTMLInputElement>){
        if(event.code === "Enter"){
            if(search!==""){
                getMovies(search);
            }
        }
    }

   
    return (

        <Box sx={{margin:"20px 20px", padding:"0px 0px 10px 0px"}}>
            <Typography variant="h3" sx={{padding:"20px"}}>Movie Library</Typography>
            <Grid 
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            >
                <Grid item xs={12}>
                    {show && <Typography  sx={{display:"block", textAlign:"center" ,color:"red"}}>No movie found</Typography>}
                </Grid>
                <Grid item>
                    <TextField 
                        id="outlined-basic" 
                        label="Search for Movie" 
                        variant="outlined" 
                        value={search} 
                        onChange={(e)=>{setSearch(e.target.value)}} 
                        onKeyDown={keyDownHandler}
                        sx={{display:"inline-block", margin:"20px"}}
                        />
                </Grid>
                <Grid item>
                    <IconButton sx={{ border:"solid"}}  onClick={()=>{if(search!==""){getMovies(search)}}}>
                        <Search />
                    </IconButton>
                </Grid>
            </Grid>
            <br></br>
            <Grid 
            container 
            direction="row"
            justifyContent="center"
            alignItems="center"
            >
                {movies.map((movie)=>(
                <Grid item key={movie.imdbID} >
                    <Movie 
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
