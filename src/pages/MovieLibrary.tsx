
import { Search} from "@mui/icons-material";
import {Box,IconButton, TextField, Typography } from "@mui/material";
import React, {useState } from "react";
import { Movie, MovieInterface} from "../components/Movie";



export function MovieLibrary() {
    const API_URL: string = "http://www.omdbapi.com/?apikey=b1d991df&s=";
    // http://www.omdbapi.com/?apikey=b1d991df&s=batman&type=movie
    const [movies,setMovies] = useState<MovieInterface[]>([]);
    const [search,setSearch] = useState<string>("");
    const [show, setShow] = useState<boolean>(false);
   
    async function getMovies(title:string){
        const response = await fetch(`${API_URL}${title}&type=movie`);
        const data =  await response.json();
        const results:MovieInterface[] = data.Search;
        if(results===undefined){
            console.log("None found");
            setShow(true);
        }
        else{
            console.log(results);
            setShow(false);
            setMovies(results);
        }
        
    }
    
    function keyDownHandler(event: React.KeyboardEvent<HTMLInputElement>){
        if(event.code === "Enter"){
            if(search!==""){
                getMovies(search);
            }
        }
    }

   
    return (

        <Box sx={{margin:"20px 20px"}}>
            
            <Typography variant="h3" sx={{padding:"20px"}}>Movie Library</Typography>
            
            <TextField 
                id="outlined-basic" 
                label="Search for Movie" 
                variant="outlined" 
                value={search} 
                onChange={(e)=>{setSearch(e.target.value)}} 
                onKeyDown={keyDownHandler}
                sx={{display:"inline-block", margin:"20px"}}
                />
            <IconButton sx={{margin:"25px 0px 0px 0px", border:"solid"}}  onClick={()=>{if(search!==""){getMovies(search)}}}>
                <Search />
            </IconButton>
            {show && <Typography  sx={{display:"inline-block", color:"red"}}>No movie found</Typography>}
            <br></br>
            


            {movies.map((movie, index)=>(
                <Movie key={index} {...movie}/>
            ))}

        </Box>

    )
}
