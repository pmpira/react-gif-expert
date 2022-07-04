import { useEffect, useState } from 'react';
import { getGif } from '../helpers/getGifs';

// Un Hook no es mas que una funcion que regresa algo
export const useFetchGifs = (category) => {

    const[images,setImages]=useState([]);

    const[isLoading,setIsLoading]=useState(true);

    const getImages=async()=>{
        const newImages=await getGif(category);
        setImages(newImages);
        setIsLoading(false);
    }

      useEffect( ()=>{
        getImages();

      },[] )    
    
    return{
        images,
        isLoading

    }

}
