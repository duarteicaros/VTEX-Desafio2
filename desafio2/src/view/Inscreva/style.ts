import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    margin: auto;

    .banner {
        width:100%
    }

    .img-banner{
        width: 100%;
    }

    #f_banner {
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        font-size: 4rem;
        padding-left: 8rem;
        margin-top: -22rem;
    }

    #f_banner_2 {
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        font-size: 2rem;
        padding-left: 8rem;
    }

    #f_banner_3 {
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        font-size: 2rem;
        padding-left: 8rem;
    }

    #f_banner_3 span {
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        color: #fff;
        padding-right: 0;
    }

    .cadastro {
        margin-top: 5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 5rem;
    }

    .texto2 {
        color: #000;
        max-width: 80rem;
        font-size: 2.8rem;
        letter-spacing: 0.4rem;
        text-align: center;
        margin-top: 8rem
    }

    .texto2 span {
        font-size: 3.1rem;
        letter-spacing: 0.5rem;
        font-weight: bold;
        color: #FFC801;
    }

    .card-container {
        background-color: rgba(0, 0, 0, 0.808);
        border-radius: 2px;
        padding: 3rem;
        width: 50rem;
        height: 10rem;
        max-width: 70rem;
        min-width: 2rem;
        display: grid;
        justify-content: center;
        align-items: center;
        margin-top: 2rem;
        margin-left: 11rem;
    }

    input {
        width: 100%;
        height: 2.7rem;
        margin-bottom: 0.8rem;
        text-align: center;
        border-radius: 2px;
        background: #fff;
        color: #000;
        font-size: 1.3rem;
    }

    #mesage-error {
        font-size: 1rem;
        color: rgb(194, 35, 35);
        justify-content: center;
        align-items: center;
        letter-spacing: 0.2rem;
        font-weight: bold;
    }

    #submit {
        background-color: #FFC801;
        color: #000;
        border-radius: 2px;
        font-weight: 600;
        font-size: 1.5rem;
    }

    #submit:hover {
        transition: all 0.4s;
        background-color: #000;
        color: #FFC801;
        border-radius: 2px;
    }
`