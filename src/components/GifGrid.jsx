import React, {useEffect, useState} from "react";
import { getGifs } from "../helpers/getGifs";
import GifItem from "./GifItem";

const GifGrid = ({ category }) => {

  const [gifs, setGif] = useState([])
  
  const loadGifs = async () => {
    const newGifs = await getGifs(category)
    setGif(newGifs)
  }
  
  useEffect(() => {
    loadGifs()
  }, [])
  


  return (
    <>
      <h2>{category}</h2>
      <div className="card-grid">
        {gifs.map((gif) => (
          <GifItem key={gif.id} {...gif}/>
        ))}
      </div>
    </>
  );
};

export default GifGrid;
