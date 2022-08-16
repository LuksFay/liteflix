import { useState, useEffect } from 'react';
import axios from '../../axios';
import './Column.css'

const Column = ({fetchUrl}) => {
    const [movies, setMovies] = useState([]);

    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results.sort(() => 0.5 - Math.random()).slice(0, 4));
            return request;
        }
        fetchData();
    },[fetchUrl]);
    
    const truncate = (str, n) =>{
        return str?.length > n ? str.substr(0, n-1) : str;
    }
    const truncateDate = (str, n) =>{
        return str?.length > n ? str.substr(0, n-1) : str;
    }
    
    const base_url = "https://image.tmdb.org/t/p/original/"

    return (
    <div className='column'>

        <div className="column_posters">
            {movies.map((movie) =>(
                <div className='poster_container' key={movie.id}>
                    <div className='column_poster_info'>
                        <div className='play_icon_circle'>
                            <img src={require('../../assets/play.png')} className='play_icon_white play_icon_size' alt='play'/>
                            <img src={require('../../assets/play_black.png')} className='play_icon_black play_icon_size' alt='play'/>
                        </div>
                            <p className='column_poster_name'>
                                {/*movie.title*/}
                                {truncate(movie?.title,19)}
                            </p>
                        <div className='column_poster_movie_info'>
                            <div className='score'>
                                <img src={require('../../assets/star.png')} className="column_poster_movie_info_text star" alt="star" />
                                <p 
                                className='column_poster_movie_info_text'
                                >{movie.vote_average.toString().replace('.', ',')}</p>    
                            </div>
                            <p
                            className='column_poster_movie_info_text'>
                                {truncateDate(movie?.release_date,5)}
                            </p>
                        </div>
                    </div> 
                    <img
                        className='column_poster'
                        src={`${base_url}${movie?.backdrop_path}`}
                        alt={movie.title} 
                    /> 
                    <div className='poster--fadeBottom' />
                </div>
            ))}
        </div>
    </div>
  )
}

export default Column;