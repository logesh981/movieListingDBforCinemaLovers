import React from 'react';

import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import {Image} from './ThumbNails.styles';

const ThumbNails =({image,movieId,clickable})=>(
    <div>
        {
        clickable? (
            <Link to={`/${movieId}`}>
                <Image src={image} alt='Movie-thumbnail'/>
            </Link>
        ):(
        <Image src={image} alt='Movie-thumbnail'/> 
        )
        }
        
    </div>
);

ThumbNails.propTypes={
    image:PropTypes.string,
    movieId:PropTypes.number,
    clickable:PropTypes.bool
}

export default ThumbNails;
