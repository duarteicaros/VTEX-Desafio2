import React, { useState, useEffect } from 'react';

import { Container } from './style';



function Inscreva(){
    return(
        <Container>
            <div className="banner">
                <img className="img-banner" src="https://i.imgur.com/BrEB6OX.jpg" alt="Banner Black Friday"/>
            <div>
                <p id="f_banner">Black Friday é Aqui!</p>
                <p id="f_banner_2">Ofertas exclusivas para usuários cadastrados</p>
                <p id="f_banner_3">Ta esperando o que?<span> Se inscreve</span></p>
            </div>
            </div>

            <section className="cadastro">
            <div>
                <h4 className="texto2">SE INSCREVA PARA RECEBER NOSSAS <span>MELHORES OFERTAS</span></h4>
                <div className="card-container">
                    <div>
                        <div id="content">
                            <form action="" id="form">
                                <input type="text" placeholder="Nome" id="nome" />
                                <input type="text" placeholder="Email" id="email" />
                                <p id="mesage-error"></p>
                                <input id="submit" type="submit" value="Cadastrar" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
           
        </Container>
    )
}

export default Inscreva;