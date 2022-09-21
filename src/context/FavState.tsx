import { atom } from "recoil";
import { MovieInterface } from "../Interfaces/MovieInterface";




export const favState = atom({
    key: 'favState', // unique ID (with respect to other atoms/selectors)
    default: 0, // default value (aka initial value)

  });


export const favMoviesState = atom({
    key: 'favMoviesState',
    default: [] as MovieInterface[],

    });

