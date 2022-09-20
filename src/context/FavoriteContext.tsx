import { createContext, ReactNode, useContext, useState } from "react";

type FavoriteProviderProps = {
    children: ReactNode;
}

type favContext = {
    favCount: number
    increaseFav: () => void
    decreaseFav: () => void
  }
  



const FavoriteContext = createContext<favContext>({} as favContext);

export function useFavorite(){ //custom hook
    return useContext(FavoriteContext)
}

export function FavoriteProvider({children}:FavoriteProviderProps){
    const [favCount, setFavCount]  = useState(0);
    function increaseFav(){
        setFavCount(prevCount=>prevCount+1);
    }
    function decreaseFav(){
        setFavCount(prevCount=>prevCount-1);
    }
    return (
    <FavoriteContext.Provider value={{favCount, increaseFav, decreaseFav}}>
        {children}
    </FavoriteContext.Provider>
    )
}