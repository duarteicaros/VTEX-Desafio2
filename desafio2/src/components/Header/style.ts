import styled from 'styled-components';

export const AreaHeader = styled.header`
    width: 100%;
    margin: auto;
    background-color: black;
    display: flex;
    color: white;
    background-color: #000;
    justify-content: space-between;
    width: 100%;
    max-width: 2586px;
    min-width: 414;
    height: 115px;

    .img_prod{
        justify-content: left;
        width: 45%;
        padding-top: 0.8rem;   
    }

`;

export const Article = styled.article`
    margin-top: 50px;
    padding-right: 5rem;
    color: pink; 

    a{
        color: white;
        text-decoration: none;
        padding: 2rem;
        font-size: 1.5rem
    }

    a:hover {
        font-size: 1.5rem;
        cursor: pointer;
        transition: all 0.5s;
        color: #FFC801;
    }
`;

