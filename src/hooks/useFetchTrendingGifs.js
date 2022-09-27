import { useEffect, useState } from "react"
import { getTrendingGifs } from "../helpers/getTrendingGifs";

export const useFetchTrendingGifs = (limit) => {

  const [state, setState] = useState({
    data: [],
    loading: true
  });

  useEffect(() => {

    getTrendingGifs(limit)
      .then(img => (
        setState({
          data: img,
          loading: false
        })
      ))

  }, [limit]);

  return state;

}