import MUIDataTable from "mui-datatables";
import { useRecoilValue } from "recoil";
import { favMoviesState } from "../context/FavState";




export function Admin(){
    const columns = ["Title", "Year", "imdbID", "Poster"];
    const favoriteMovies = useRecoilValue(favMoviesState);
    const options = {
        filterType: 'checkbox',
    };
    
    return(
        <MUIDataTable
            title="Favorite Movies"
            data = {favoriteMovies}
            columns={columns}
            options={options}
        />
    )
}