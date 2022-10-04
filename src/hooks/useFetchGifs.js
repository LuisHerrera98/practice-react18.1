import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

const useFetchGifs = (category) => {
  const [gifs, setGif] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const loadGifs = async () => {
    const newGifs = await getGifs(category);
    setGif(newGifs);
    setIsLoading(false)
  };

  useEffect(() => {
    loadGifs();
  }, []);

  return {
    gifs,
    isLoading,
  };
};

export default useFetchGifs;
