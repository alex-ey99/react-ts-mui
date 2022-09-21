import { SetterOrUpdater } from "recoil";
import { MovieInterface } from "../Interfaces/MovieInterface";



export function decreaseCount(movie:MovieInterface, favoriteMovies:MovieInterface[], setFavoriteCount: SetterOrUpdater<number>){
    if(favoriteMovies.find((element)=> element.imdbID === movie.imdbID)!= null){
        setFavoriteCount(prevCount=>prevCount-1);
    }
}

export function deleteMovie(movie:MovieInterface, setFavoriteMovies:SetterOrUpdater<MovieInterface[]>){
    setFavoriteMovies(prevFavMovies=>{
        if(prevFavMovies.find((element)=> element.imdbID === movie.imdbID)== null){
            return [...prevFavMovies]
        }
        else {
            return prevFavMovies.filter(element=> element.imdbID !==movie.imdbID);
        }
    })
}
