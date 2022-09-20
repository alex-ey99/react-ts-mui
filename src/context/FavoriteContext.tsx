import { createContext, ReactNode, useContext, useState } from "react";
import { MovieInterface } from "../components/Movie";

type FavoriteProviderProps = {
    children: ReactNode;
}

type favContext = {
    favCount: number
    increaseFav: (movie:MovieInterface) => void
    decreaseFav: (movie:MovieInterface) => void
    favMovies:  MovieInterface[]
  }
  



const FavoriteContext = createContext<favContext>({} as favContext);

export function useFavorite(){ //custom hook
    return useContext(FavoriteContext)
}

export function FavoriteProvider({children}:FavoriteProviderProps){
    const [favCount, setFavCount]  = useState(0);
    const [favMovies, setFavMovies] = useState<MovieInterface[]>([]);

    function increaseFav(movie:MovieInterface){
        setFavMovies(prevFavMovies=>{
            if(prevFavMovies.find((element)=> element.imdbID === movie.imdbID)== null){
                setFavCount(prevCount=>prevCount+1);
                return [...prevFavMovies, movie]
            }
            else {
                return [...prevFavMovies]
            }
            
        });
    }
    function decreaseFav(movie:MovieInterface){
    
        setFavMovies(prevFavMovies=>{
            if(prevFavMovies.find((element)=> element.imdbID === movie.imdbID)== null){
                return [...prevFavMovies]
            }
            else {
                setFavCount(prevCount=>prevCount-1);
                return prevFavMovies.filter(element=> element.imdbID !==movie.imdbID);
            }


        })
    }
    return (
    <FavoriteContext.Provider value={{favCount, increaseFav, decreaseFav, favMovies}}>
        {children}
    </FavoriteContext.Provider>
    )
}