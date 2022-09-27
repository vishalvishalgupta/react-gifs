import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useFetchTrendingGifs } from "../hooks/useFetchTrendingGifs";
import { GifGridItem } from "./GifGridItem";

export const TrendingGifGrid = () => {
  const [limit, setLimit] = useState(10)
  const {data, loading} = useFetchTrendingGifs(limit);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isFetching) return;
    fetchMoreListItems();
  }, [isFetching, limit]);

  function fetchMoreListItems() {
      setLimit(prev => prev + 10);
      setIsFetching(false);
  }

  function handleScroll() {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
    setIsFetching(true);
  }
  return (
    <div className="gif-grid">
        <Link className="searchBox" to="/">Search Gifs</Link>
        {loading && <h3>Loading...</h3>}
        {data.map(img => (
            <GifGridItem key={img.id} {...img} />
        ))}
    </div>
  );
};
