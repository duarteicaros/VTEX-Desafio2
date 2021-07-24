import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Container } from './style';
import newId from '../../services/ids'

interface ICustomer {
    id: number;
    name: string;
    email: string;
}

function Inscreva(){
    const [usuario, setData] = useState<ICustomer[]>([])
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    

    function erro() {
        const errorelement = (
            <p id="mesage-error">Algo não está correto, revise antes de enviar</p>
        );
        ReactDOM.render(errorelement, document.getElementById('mesage-error'));
    }

    function handleCustomer() {
        if(name == '' || email ==''){
            return erro();
        }else{
            let id = newId();
            let data = {
                id: id,
                name,
                email
            };
            let Customer = JSON.stringify(data);
            let product = data;
            let push: any = [...usuario, usuario.push(product)]
            Customer = JSON.stringify(usuario);
            localStorage.setItem('@Usuarios', Customer);

            const carregandoelement = (
                <div id="carregando">
                    <h3 className="novidades">Carregando...</h3>
                </div>
            );
            ReactDOM.render(carregandoelement, document.getElementById('mesage-carregando'));

            const finishedelement = (

                <div id="pronto">
                    <h3 className="concluido">Cadastro concluído, nos vemos em breve!</h3>
                    <h3 className="cadastre-amigo">Se quiser, cadestre um amigo!</h3>
                </div>
            );
            setTimeout(() => {
                ReactDOM.render(finishedelement, document.getElementById('mesage-carregando'));
            }, 1000)

            setEmail('')
            setName('')
        }
            
    }

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
                                <p id="mesage-carregando"></p>
                                <input type="text" placeholder="Nome" value={name} onChange={e => setName(e.target.value)} />
                                <input type="text" placeholder="Email"  value={email} onChange={e => setEmail(e.target.value)} />
                                <p id="mesage-error" ></p>
                                <input id="submit" onClick={() => handleCustomer()} value="Cadastrar" />
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