import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GifSearchApp } from "./GifSearchApp";
import { TrendingGifGrid } from "../src/components/TrendingGifs";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
        <Route exact path="/" element={<GifSearchApp />} />
        <Route exact path="/trending-gifs" element={<TrendingGifGrid />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
