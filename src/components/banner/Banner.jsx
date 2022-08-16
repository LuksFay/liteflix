import React, {useState, useEffect} from 'react';
import Column from '../columnmovies/Column';
import axios from '../../axios';
import requests from '../../request';
import request from '../../request';
import MyColumn from '../columnmovies/MyColumn';
import './Banner.css';

const Banner = () => {
  
  const [movie, setMovie]=useState([]);
  const [category, setCategory] = useState("POPULARES")
  const [populares, setPopulares] = useState(true)
  const [misPeliculas, setMisPeliculas] = useState(false)
  
  useEffect(()=>{
      category === "POPULARES" ? setPopulares(true) : setPopulares(false);
      category === "MIS PELICULAS" ? setMisPeliculas(true) : setMisPeliculas(false);
    }, [category])
    
  useEffect(()=>{
    async function fetchData(){
      const request = await axios.get(requests.peliculaDestacada)
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
          ]
        );
        return request;
    }
    fetchData();
  },[]);
  
  const handleOnChange = (e) => {
    setCategory(e.target.value);
  };
  const base_url = "https://image.tmdb.org/t/p/original/"
  return (
    <>
    
    <header className='banner'
      style={{
        backgroundSize:"cover",
        backgroundImage:`url("${base_url}${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    > 
      <div className='banner_contents'>
        <div className='banner_title_div'> 
          <p className='banner_original_thin'>ORIGINAL DE <span className='banner_original_bold'>LITEFLIX</span></p>
          <h1 className='banner_title'>
            {movie?.title}
         {/*movie?.title || movie?.name || movie.original_name*/}
          </h1>
        </div>
        
        <div className='banner_buttons'> 
          <button className='banner_button'>REPRODUCIR</button>
          <button className='banner_button banner_button_lista'>MI LISTA</button>
        </div>
      
      <div className='movie_list'>
        <span>ver:</span>
        <select onChange={handleOnChange}>
          <option>POPULARES</option>
          <option>MIS PELICULAS</option>
        </select>
        {populares && <Column fetchUrl={request.populares}/>}
        {misPeliculas && <MyColumn/>}
      </div>
      
      </div>

      
    </header>
    <div className='banner--fadeBottom' />
  
    </>
  )
}

export default Banner