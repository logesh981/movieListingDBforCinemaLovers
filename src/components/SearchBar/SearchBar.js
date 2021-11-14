import react,{useState,useEffect,useRef} from 'react';

import PropTypes from 'prop-types';

import searchIcon from '../../images/search-icon.svg';

import {Wrapper,Content} from './SearchBar.styles';

const SearchBar=({setSearchTerm})=>{
    // Dual states for delayed Response
    const [state,setState] =useState('');
    //Trick to skipp the initial REnder 
    const initial = useRef(true);
 
    
    useEffect(()=>{
        if(initial.current){
            initial.current=false;
            return;
        }
        const timer=setTimeout(()=>{
            setSearchTerm(state);
        },500)

        return ()=>clearTimeout(timer)
    },[setSearchTerm,state])

    return (
        <Wrapper>
            <Content>
                <img src={searchIcon} alt='search-icon' />
                <input
                    type='text'
                    placeholder="Enter the movie you want to search  here"
                    onChange={event=>setState(event.currentTarget.value)}
                    value={state}
                />
            </Content>
        </Wrapper>
    )
}

SearchBar.propTypes={
    setSearchTerm:PropTypes.func
}
export default SearchBar;
