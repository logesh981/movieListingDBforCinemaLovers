import styled from 'styled-components';

export const Wrapper=styled.div`
    max-width:var(--maxWidth);
    margin: 0 auto;
    padding: 0 20px;

    h1{
        color:var(--medGrey);
        @media screen and (maxwidth:768px){
            font-size:var(--fontBig);
        }
    }
`;

export const Content=styled.div`
    /* css-grid */
    display: grid;
    /* Responsive grid trick */
    grid-template-columns:repeat(auto-fill,minmax(200px,1fr));
    grid-gap:2rem;

`;
