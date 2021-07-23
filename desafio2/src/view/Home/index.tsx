import React, { useState, useEffect } from 'react';

import { Container } from './style';

import api from '../../services/api';
import { title } from 'process';

interface IProduct {
    id: number;
    photo: string;
    name: string;
    description: string;
    price: number;
}

interface Test {
    cart: IProduct[]
}

const Home: React.FC = () => {
    const [data, setData] = useState<IProduct[]>([]);
    const [cart, setCart] = useState<IProduct[]>([]);

    useEffect(() => {
        api.get('').then(
            response => {
                setData(response.data)
            }
        )
    }, [])

    
    const handleCart = (index: number) => {
        let productStore = JSON.stringify(data[index]);
        let product = data[index]
        let push: any = [...cart, cart.push(product)]
        productStore = JSON.stringify(cart);
        localStorage.setItem('@cart', productStore)

    }

    return (
        <Container>
            <section className="produtos">
                {data.map((prod, index) => (
                    <div className="product-content" key={prod.id}>
                        <img className="img_prod" src={prod.photo} alt=" iphone" width="200" height="auto" />
                        <h4>{prod.name}</h4>
                        <span className="description">{prod.description}</span>
                        <h6>{prod.price}</h6>
                        <button onClick={() => handleCart(index)}>Adicionar ao Carrinho</button>
                    </div>
                ))}
            </section>
        </Container>
    );
}

export default Home;