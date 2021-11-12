import React from 'react';

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

export default ThumbNails;
