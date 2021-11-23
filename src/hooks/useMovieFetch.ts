import {useState,useEffect,useCallback} from 'react';

import API,{Movie,Cast,Crew} from '../API';
//helpers

import {isPersistedState} from '../helpers';
//type

export type MovieState=Movie &{actors:Cast[],directors:Crew[]}

export const useMovieFetch = (movieId:number) =>{
    const [state,setState]=useState<MovieState>({} as MovieState);
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

        const sessionState=isPersistedState(movieId.toString());
        if(sessionState){
            setState(sessionState);
            setLoading(false);
            return;
        }
        fetchMovie();
    },[movieId]);

    //storing to sessionstorage
    useEffect(()=>{
        sessionStorage.setItem(movieId.toString(),JSON.stringify(state));
    },[movieId,state])
    return {state,loading,error};
};