import React from 'react';


import { Link } from 'react-router-dom';

import {Image} from './ThumbNails.styles';
//type

type Props={
    image:string;
    movieId?:number;
    clickable:boolean;
}
const ThumbNails:React.FC<Props> =({image,movieId,clickable})=>(
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
