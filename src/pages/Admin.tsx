import MUIDataTable from "mui-datatables";
import { useRecoilState, useSetRecoilState } from "recoil";
import { favMoviesState, favState } from "../context/FavState";




export function Admin(){
    const columns = ["Title", "Year", "imdbID", "Type", "Poster"];
    const [favoriteMovies, setFavoriteMovies] = useRecoilState(favMoviesState);
    const setFavoriteCount = useSetRecoilState(favState);
    type movieType = [
        Title: string,
        Year: string,
        imdbID: string,
        Type: string,
        Poster: string,
    ]
    const options = {
        filterType: 'checkbox',
        onRowsDelete: (rowsDeleted:object, newTableData:movieType[]) => {
            var newMovies = newTableData.map((movie:movieType)=>({
                Title: movie[0],
                Year: movie[1],
                imdbID: movie[2],
                Type: movie[3],
                Poster: movie[4]
            }));
            console.log(newTableData);
            setFavoriteMovies(newMovies);
            setFavoriteCount(newTableData.length);      
        },
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