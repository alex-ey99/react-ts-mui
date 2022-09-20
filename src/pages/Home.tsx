import { Box, Typography } from "@mui/material";





export function Home() {
    return (
        <Box sx={{margin:"20px 20px"}}>
            <Typography variant="h3" sx={{padding:"20px"}}>Home</Typography>
            <ol>
                <li><Typography>Search for movies in the Movie Library section</Typography></li>
                <li><Typography>Add movies to your Favorites</Typography></li>
                <li><Typography>Check your favorite movies in the Favorites section</Typography></li>
                
            </ol>
        </Box>

    )
}
