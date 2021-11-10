import {useState,useEffect,useRef} from 'react';

import API from '../API';

const initialState={
    page:0,
    results:[],
    total_pages:0,
    total_results:0
};
export const useHomeFetch =()=>{
    const [searchTerm,setSearchTerm]=useState('');
    const [state,setState]=useState(initialState);
    const[loading,setLoading]=useState(false);
    const [error,setError]=useState(false);
    // console.log(searchTerm)
    //Not the function in the API settings
    const fetchMovies=async(page,searchTerm="")=>{
        try {
            setError(false);
            setLoading(true);
            //This is the function in search Term
            const movies=await API.fetchMovies(searchTerm,page);
            setState(prev=>({
                ...movies,
                results:
                page>1?[...prev.results,...movies.results]:
                [...movies.results]
            }))
        }catch(error){
            setError(true);
        }
        setLoading(false);
    };
    
    //initial and search
    useEffect(()=>{
        setState(initialState);
        fetchMovies(1,searchTerm);
    },[searchTerm])
    

    return {state,loading,error,searchTerm,setSearchTerm};
}