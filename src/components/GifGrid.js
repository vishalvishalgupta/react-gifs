import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {  

  const {data, loading} = useFetchGifs(category);
  return (   
    <div className="gif-grid">
      { loading&& <h3>Loading...</h3>}
     {
       data.map( img => (
         <GifGridItem key={img.id} {...img} />
       ))
     }
    </div>
  )
}
