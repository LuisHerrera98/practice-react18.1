import React, {useEffect, useState} from "react";
import { getGifs } from "../hooks/getGifs";

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
    </>
  );
};

export default GifGrid;
