import React from 'react';

//API

import API from '../API';

//Configuration
import {POSTER_SIZE,BACKDROP_SIZE,IMAGE_BASE_URL} from '../config';
//components
import HeroImage from './HeroImage/HeroImage';
import Grid from './Grid/Grid';
import ThumbNails from './ThumbNails/ThumbNails';
import Spinner from './Spinner/Spinner';
import SearchBar from './SearchBar/SearchBar';

//hooks
import {useHomeFetch} from '../hooks/useHomeFetch';
//image
import NoImage from '../images/no_image.jpg';

const Home =()=>{
    const {state,loading,error,searchTerm,setSearchTerm}=useHomeFetch();
    console.log(state);
    return (
        <>
        {!searchTerm && state.results[0] ?
        <HeroImage 
        image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
        title={state.results[0].original_title}
        text={state.results[0].overview}
         />
        :null
        }
        <SearchBar setSearchTerm={setSearchTerm}/>
        <Grid header={searchTerm?'Search Results':'Popular Movies'}>
           {
               state.results.map(movie=>(
                   <ThumbNails 
                   key={movie.id}
                    clickable
                    image={
                        movie.poster_path
                        ? IMAGE_BASE_URL+POSTER_SIZE+movie.poster_path
                        : NoImage
                    }
                    movieId={movie.id}
                    />
                    
               ))
           } 
        </Grid>

        <Spinner/>
        </>
    )
}

export default Home;