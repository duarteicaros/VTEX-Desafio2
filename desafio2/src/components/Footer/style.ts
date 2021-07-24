import styled from 'styled-components';

export const Footers = styled.footer`
    height: 100%;
    padding: 3rem;
    text-align: center;
    background-color: black;
    color: white;

    .text-footer {
        font-size: 1.2rem;
        letter-spacing: 0.1rem;
        font-weight: 400;
        padding-bottom: 0.5rem;
    }

    ul.social-network {
        list-style: none;
        display: inline;
        padding: 0;
    }   

    ul.social-network li {
        display: inline;
        margin: 0;
        padding: 5px;
    }

    ul.social-network li a {
        text-decoration: none;
    }

    .fa {
        font-size: 2rem;
        color: #fff;
        padding: 1.5rem;
    }

    .fa-facebook-square:hover {
        color: #1c449c;
    }

    .fa-linkedin-square:hover {
        color: #1091d6;
    }

    .fa-instagram:hover {
        color: #C13584;
    }

    .fa-github-square:hover {
        color: rgb(23, 238, 52);
    }

    .copyright{
    font-size: 0.8rem;
    }

`;