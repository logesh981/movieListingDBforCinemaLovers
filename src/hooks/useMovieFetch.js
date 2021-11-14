import {useState,useEffect,useCallback} from 'react';

import API from '../API';
//helpers

import {isPersistedState, ispersistedState} from '../helpers';

export const useMovieFetch = movieId =>{
    const [state,setState]=useState({});
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState(false);
    //To stop infinity loop
    

    useEffect(()=>{
        const fetchMovie= async()=>{
            try{
                setLoading(true);
                setError(false);
    
                const movie=await API.fetchMovie(movieId);
                const credits = await API.fetchCredits(movieId);
                //separting directors
                const directors=credits.crew.filter(
                    member=>member.job==='Director'
                );
                setState({
                    ...movie,
                    actors:credits.cast,
                    directors
                })
                setLoading(false)
                
            }catch(error){
                setError(true);
            }
        }

        const sessionState=isPersistedState(movieId);
        if(sessionState){
            setState(sessionState);
            setLoading(false);
            return;
        }
        fetchMovie();
    },[movieId]);

    //storing to sessionstorage
    useEffect(()=>{
        sessionStorage.setItem(movieId,JSON.stringify(state));
    },[movieId,state])
    return {state,loading,error};
};