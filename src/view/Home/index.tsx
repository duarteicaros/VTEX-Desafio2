import React, { useState, useEffect } from 'react';

import { Container } from './style';

import api from '../../services/api';
import api2 from '../../services/api2';

const produtosF1 = [{
    "id": 1,
    "photo": "https://i.imgur.com/tzJu13m.png",
    "name": "Video Game - Atari 2600",
    "price": 699.00
},
{
    "id": 2,
    "photo": "https://i.imgur.com/vG7RCtY.png",
    "name": "Video Game - Playstation",
    "price": 889.99
},
{
    "id": 3,
    "photo": "https://i.imgur.com/xlntNl2.png",
    "name": "Video Game - Nintendo 64",
    "price": 685.99
}]

const produtos2 = [{
    "id": 4,
    "photo": "https://i.imgur.com/KGGNgKi.png",
    "name": "Video Game - Super Nintendo",
    "price": 947.99
},
{
    "id": 5,
    "photo": "https://i.imgur.com/id69dYT.png",
    "name": "Video Game - Mega Drive",
    "price": 1238.99
},
{
    "id": 6,
    "photo": "https://i.imgur.com/b5mHRMF.png",
    "name": "Video Game - NES",
    "price": 479.99
}   
]

interface IProduct {
    id: number;
    photo: string;
    name: string;
    price: number;
}

const Home: React.FC = () => {
    const [data, setData] = useState<IProduct[]>([]);
    const [data2, setData2] = useState<IProduct[]>([]);
    const [cart] = useState<IProduct[]>([]);

    useEffect(() => {
        api.get('/produtos-F1').then(
            response => {
                setData(response.data)
            }
        )
    }, [])

    useEffect(() => {
        api2.get('/produtos-F2').then(
            response => {
                setData2(response.data)
            }
        )
    }, [])

    
    const handleCart = (index: number) => {
        let productStore = JSON.stringify(data[index]);
        let product = data[index];
        let push: any = [...cart, cart.push(product)];
        productStore = push;
        productStore = JSON.stringify(cart);
        localStorage.setItem('@cart', productStore);
    }
    const handleCart2 = (index: number) => {
        let productStore = JSON.stringify(data2[index]);
        let product = data2[index];
        let push: any = [...cart, cart.push(product)]
        productStore = push;
        productStore = JSON.stringify(cart);
        localStorage.setItem('@cart', productStore)
    }

    return (
        <Container>
            <div className="banner">
                <img className="img-banner" src="https://i.imgur.com/BrEB6OX.jpg" alt="Banner Black Friday"/>
            <div>
                <p id="f_banner">Black Friday é Aqui!</p>
                <p id="f_banner_2">Os melhores <span>PREÇOS</span>, as melhores <span>OFERTAS</span></p>
                <p id="f_banner_3">Você só encontra aqui!</p>
            </div>
            </div>

            <div id="novidades">
                <h3 className="novidades">Um pouco do que vem por aí</h3>
            </div>

            <div >
                <section>
                    {produtosF1.length > 0 ? (
                        <>
                            {produtosF1.map((prod, index) => ( 
                                    <div className="product-content" key={prod.id}>
                                        <img className="img_prod" src={prod.photo} alt=" iphone" width="200" height="auto" />
                                        <h4 className="description">{prod.name}</h4>
                                        <p className="preco">De <span className="p-antigo">R$ 1564,00</span> por <span className="p-novo">R$ {prod.price}</span></p>
                                        <button className="button" onClick={() => handleCart(index)}>Adicionar ao Carrinho</button>
                                    </div>
                            ))}
                        </>
                    ): (
                        <div>Nenhum resultado</div>
                    )}
                </section>
            </div>
            <div >
                <section>
                    {produtos2.length > 0 ? (
                        <>
                            {produtos2.map((prod, index) => ( 
                                    <div className="product-content" key={prod.id}>
                                        <img className="img_prod" src={prod.photo} alt=" iphone" width="200" height="auto" />
                                        <h4 className="description">{prod.name}</h4>
                                        <p className="preco">De <span className="p-antigo">R$ 1564,00</span> por <span className="p-novo">R$ {prod.price}</span></p>
                                        <button className="button" onClick={() => handleCart2(index)}>Adicionar ao Carrinho</button>
                                    </div>
                            ))}
                        </>
                    ): (
                        <div>Nenhum resultado</div>
                    )}
                </section>
            </div>
        </Container>
    );
}

export default Home;