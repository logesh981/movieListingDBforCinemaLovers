import React from 'react';
import { useParams } from 'react-router-dom';

//Configuration
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';

//Components
import BreadCrumb from './BreadCrumb/BreadCrumb';
import Grid from './Grid/Grid';
import Spinner from './Spinner/Spinner';
import MovieInfo from './MovieInfo/MovieInfo';
import MovieInfoBar from './MovieInfoBar/MovieInfoBar';
//HOOK
import { useMovieFetch } from '../hooks/useMovieFetch';
//FALLBACKIMAGES
import NoImage from '../images/no_image.jpg';
import Actor from './Actor/Actor';



const Movie:React.FC =()=>{
    const {movieId}=useParams();
    const {state:movie,loading,error} = useMovieFetch(Number(movieId));

    // console.log(movie);
    if(loading) return <Spinner/>;
    if (error) return <div> Something Snapped Will fix it soon</div>

    return (
        <>
            <BreadCrumb movieTitle={movie.original_title}/>
            <MovieInfo movie={movie}/>
            <MovieInfoBar
            time={movie.runtime} 
            budget={movie.budget}
            revenue={movie.revenue}/>
            <Grid header='Actors'>
                {movie.actors.map(actor=>(
                    <Actor 
                    key={actor.credit_id}
                    name={actor.name}
                    character={actor.character}
                    imageUrl={
                        actor.profile_path
                        ?`${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                        :NoImage
                    }   
                    />
                ))
                }
            </Grid>
        </>
    )
}



export default Movie;