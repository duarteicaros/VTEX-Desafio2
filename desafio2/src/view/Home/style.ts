import styled from 'styled-components';

export const Container = styled.div`
    width: 80%;
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

    #f_banner_2 span {
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        color: #fff;
        padding-right: 0;
    }

    #f_banner_3 {
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        font-size: 2rem;
        padding-left: 8rem;
    }

    #novidades {
        background-color: #000;
        margin-top: 12rem;
        padding: 2.5rem 2.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        letter-spacing: 0.3rem;
    }

    .novidades {
        font-size: 2rem;
        color: #ffffff;
        letter-spacing: 0.3rem;
    }


    section {
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        vertical-align: baseline;
        align-items: center;
        height: 30rem;
        background-color: #f1f1f1;

        .product-content{
            margin-top: 1rem;
            text-align: center;
            height: 415px;
            background: #fff;
            border-radius: 5px;
            padding: 5px;
        }

        .button{
            margin-top:1rem;
            padding: 12px 20px;
            max-width: 200px;
            background-color: #FFC801;
            color: #000;
            border-radius: 6px;
            border: 0;
            font-size: 1rem;
            font-weight: bold;
        }

        .button:hover {
            cursor: pointer;
            box-shadow: 0 1px 6px #20212447;
            background-color: #ffa500;
            font-size: 1.05rem;
            transition: all 0.4s;
        }

        .img_prod {
            width: 20rem;
        }

        .description {
            text-align: center;
            font-size: 1.5rem;
            margin-top: -1.5rem;
        }

        .preco{
            text-align: center;
            font-size: 1.2rem;
            color: #000;
        }

        .p-antigo {
            text-decoration: line-through;
            color: darkgray;
        }

        .p-novo {
            font-size: 2rem;
            font-weight: bold;
            color: darkred;
        }
    }
`