
import { Search} from "@mui/icons-material";
import {Box, Button, IconButton, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Movie, MovieInterface} from "../components/Movie";


export function Store() {
    const API_URL: string = "http://www.omdbapi.com/?apikey=b1d991df&s=";
    // http://www.omdbapi.com/?apikey=b1d991df&s=batman&type=movie
    const [movies,setMovies] = useState<MovieInterface[]>([]);
    const [search,setSearch] = useState<string>("");
    
   
    async function getMovies(title:string){
        const response = await fetch(`${API_URL}${title}&type=movie`);
        const data =  await response.json();
        const results:MovieInterface[] = data.Search;
        console.log(results);
        setMovies(results);
    }
    

   
    return (

        <Box sx={{margin:"20px 20px"}}>
            
            <Typography variant="h3" sx={{padding:"20px"}}>Store</Typography>
            
            <TextField id="outlined-basic" label="Search for Movie" variant="outlined" value={search} onChange={(e)=>{setSearch(e.target.value)}} sx={{display:"inline-block", margin:"10px"}}/>
            <IconButton sx={{padding:"25px"}} onClick={()=>{getMovies(search)}}>
                <Search />
            </IconButton>
            <br></br>
            


            {movies.map((movie, index)=>(
                <Movie key={index} {...movie} newFav={true}/>
            ))}

        </Box>

    )
}
