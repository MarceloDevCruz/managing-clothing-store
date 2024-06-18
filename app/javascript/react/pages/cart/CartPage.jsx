import React, { useContext, useState, useEffect } from 'react';
import { Container } from './styled';
import axios from 'axios';
import { CreateContext } from '../../context/CreateContext';
import Cart from '../../components/Cart';

const CartPage = () => {
  const context = useContext(CreateContext);
  const [carts, setCarts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCarts = async () => {
      try {
        const response = await axios.get(`/carts?user_id=${context.user.id}`);
        setCarts(response.data.carts);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch carts.');
        setLoading(false);
      }
    };

    fetchCarts();
  }, [context.user.id]);

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  const itemMap = {};

  carts.forEach((cart) => {
    if (!itemMap[cart.item_id]) {
      itemMap[cart.item_id] = {
        ...cart,
        quantity: cart.item_quantity,
      };
    } else {
      itemMap[cart.item_id].quantity += cart.item_quantity;
    }
  });

  const uniqueCarts = Object.values(itemMap);

  console.log(uniqueCarts)

  return (
    <Container theme={context.theme}>
      <h2>Meu Carrinho</h2>
      {uniqueCarts.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <>
          {uniqueCarts.map((cart) => (
            <Cart
              key={cart.id}
              item={cart.item}
              id={cart.item.id}
              item_quantity={cart.quantity}
              cart_id={cart.id}
              address={cart.address}
            />
          ))}
        </>
      )}
    </Container>
  );
};

export default CartPage;
