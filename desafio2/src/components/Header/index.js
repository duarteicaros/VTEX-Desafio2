import React from 'react';
import { AreaHeader } from './style';
import { Article } from './style';

export default function Header() {
    return ( 
        <AreaHeader>
            <header>
                <img className="img_prod" src='https://i.imgur.com/TnMdC5p.png' alt=" iphone" width="200" height="auto" />
            </header>

            <Article>
                <a className="menu" href="/">Home</a>
                <a className="menu" href="/inscreva">Se inscreva</a>
            </Article>

        </AreaHeader>
       
    )
}