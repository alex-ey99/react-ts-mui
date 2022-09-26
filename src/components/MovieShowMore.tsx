import { Box, Typography } from "@mui/material";
import { memo } from "react";
import { MovieDetails } from "../Interfaces/MovieDetails";
import { CustomModal } from "./CustomModal";


type movieShowMoreProp = {
    movieDet: MovieDetails;
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

function MovieShowMore({movieDet, open, setOpen}:movieShowMoreProp){
    return(
        <CustomModal
                    open={open}
                    onClose={()=>setOpen(false)}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    >
                    <Box width={400} bgcolor={"background.default"} color={"text.primary"} padding={3} borderRadius={5}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            {movieDet.Title}
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            Year: {movieDet.Year}
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            Actors: {movieDet.Actors}
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            Runtime: {movieDet.Runtime}
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            Genre: {movieDet.Genre}
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            Director: {movieDet.Director}
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            Plot: {movieDet.Plot}
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            Awards: {movieDet.Awards}
                        </Typography>

                    </Box>
                </CustomModal>
    )
}

export default memo(MovieShowMore);