import axios from "axios";
import md5 from "md5";

const PUBLIC_KEY = "285de3f728a15fcf704dbbbdc75a29c8";
const PRIVATE_KEY = "09c150348b5a426a3b7ecaa12dffccb798ee6bb9";

export const getMarvelHeroes = async (offset = 0) => {
  
  const ts = new Date().getTime();
  const hash = md5(ts + PRIVATE_KEY + PUBLIC_KEY);

  try {
    const res = await axios.get(
      `https://gateway.marvel.com/v1/public/characters?limit=20&offset=${offset}&ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}`
    );
    
    return res.data.data.results;
  } catch (error) {
    console.error("Error Marvel API:", error.response?.data || error.message);
    
    return [];
  }
  
};
