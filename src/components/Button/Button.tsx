import React from 'react';



import {Wrapper} from './Button.styles';
//ypes
type Props={
    text:string;
    callback:()=>void;
}
const Button : React.FC<Props>= ({text,callback}) =>(
    <Wrapper type="button" onClick={callback}>
        {text}
    </Wrapper>
)


export default Button;