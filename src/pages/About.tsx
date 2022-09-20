import { Box, Typography } from "@mui/material";

export function About() {
    return (
        <Box sx={{margin:"20px 20px"}}>
            <Typography variant="h3" sx={{padding:"20px"}}>About</Typography>
            <Typography variant="body1" sx={{padding:"0px 20px"}}>Welcome to MovieSearch. I created this website to practice my skills with React, Typescript, MUI.</Typography>
        </Box>

    )
}
