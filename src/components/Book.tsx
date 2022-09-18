
import { Box, Button, Card, CardActions, CardContent, Typography } from "@mui/material";

interface Book{
    title: string;
    author: string;
}
export function Book(book:Book){

    return(
        <Card sx={{backgroundColor:"#DFF6FF", margin:"10px", width:"250px", display:"inline-block"}}>
            <CardContent>
                <Typography sx={{fontSize: 16}} color="text.secondary" gutterBottom>Book</Typography>
                <Typography variant="h5" >{book.title}</Typography>
                <Typography color="text.secondary">{book.author}</Typography>
            </CardContent>
            <CardActions>
                <Button size="small"> Learn More</Button>
                <Button size="small"> Buy</Button>
            </CardActions>
        </Card>
        
        )
}