//import { useEffect, useState } from 'react';
//import { getGif } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItem } from './GifItem';

export const GifGrid = ({category}) => {
 
  //const [counter,setCounter]=useState(10);

  const{ images,isLoading }=useFetchGifs( category );

  //Si en el segundo argumento dejamos el arreglo de las dependencias vacio, significa que se va a ejecutar solo la primera vez
     
  return (
    <>
        <h3>{category}</h3>
        
        {
          isLoading && ( <h2>Cargando...</h2> )
        }
        
        <div className="card-grid">
          {
            images.map((image)=>(
              //<li key={id}>{title}</li>
              <GifItem 
                key={image.id}
                { ...image }/>
            ))
          }


        </div>


        {/* {
            gifs.map(gif=>(
                <p>{gif}</p>
            ))
        } */}

        {/* <h5>{counter}</h5>
        <button onClick={()=>setCounter(counter+1)}>+1</button> */}
    </>
  )
}
