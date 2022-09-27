import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category, limit) => {

  const [state, setState] = useState({
    data: [],
    loading: true
  });  
  
  useEffect( () => {

    getGifs(category, limit)
    .then( img => ( 
      setState({
        data: img,
        loading: false
      }) 
    ))

  }, [category, limit]);

  return state;

}
