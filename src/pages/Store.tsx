import { Box, Typography } from "@mui/material";
import { Book } from "../components/Book";


export function Store() {
    return (

        <Box sx={{margin:"20px 20px"}}>
            <Typography variant="h3" sx={{padding:"20px"}}>Store</Typography>
            <Book
                title="Oliver Twist"
                author="Charles Dickens"
            />

            <Book
                title="Moby Dick"
                author="Herman Neville"
            />

        </Box>

    )
}
