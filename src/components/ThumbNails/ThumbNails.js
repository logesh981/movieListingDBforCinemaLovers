import React from 'react';

import {Image} from './ThumbNails.styles';

const ThumbNails =({image,movieId,clickable})=>(
    <div>
        <Image src={image} alt='Movie-thumbnail'/>
    </div>
);

export default ThumbNails;
