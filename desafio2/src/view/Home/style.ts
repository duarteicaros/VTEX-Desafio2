import styled from 'styled-components';

export const Container = styled.div`
    width: 80%;
    margin: auto;

    section { 
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            vertical-align: baseline;
            align-items: center;
            height: 30rem;
            background-color: #f1f1f1;

        .img_prod {
            width: 23rem;
        }

        .description {
            text-align: center;
            font-size: 1.5rem;
            padding: 50px 0;
        }
    }
`