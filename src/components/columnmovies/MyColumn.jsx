import { useState, useEffect } from 'react';
import './Column.css'

const MyColumn = () => {
    const [myMovies, setMyMovies] = useState([]);

    useEffect(() => {
    const storageMovie = JSON.parse(localStorage.getItem('MyUploadedMovies')) ?? [];
    setMyMovies([storageMovie]);
    }, []); 

    return (
    <div className='column'>
        {myMovies.length > 0 && (
            <div className="column_posters">
                {myMovies[0].map((movie) =>(
                <div className='poster_container' key={movie.title}>
                    <div className='column_poster_info'>
                    <div className='play_icon_circle'>
                            <img src={require('../../assets/play.png')} className='play_icon_white play_icon_size' alt='play'/>
                            <img src={require('../../assets/play_black.png')} className='play_icon_black play_icon_size' alt='play'/>
                        </div>
                    <p className='column_poster_name'>{movie.title}</p>
                    <div className='column_poster_movie_info'>
                            <div className='score'>
                                <img src={require('../../assets/star.png')} className="column_poster_movie_info_text star" alt="star" />
                                <p 
                                className='column_poster_movie_info_text'
                                >10</p>    
                            </div>
                            <p
                            className='column_poster_movie_info_text'>
                                2022
                            </p>
                        </div>
                    </div> 
                    <img
                    className='column_poster'
                    src={movie.backdrop_path}
                    alt={movie.title}
                    /> 
                    <div className='poster--fadeBottom' />  
                </div>
                ))}
            </div>

            )}
    </div>
  )
}

export default MyColumn;