import React, { useContext, useEffect, useState } from 'react';
import { Container, PostContainer, Button } from './styled';
import axios from 'axios';
import { CreateContext } from '../../context/CreateContext';
import { useParams } from 'react-router-dom';
import Cart from '../../components/Cart';

const IndividualPost = () => {
  const context = useContext(CreateContext);
  const params = useParams();
  const id = Number(params.id);
  const [item, setItem] = useState(null);
  const [showCart, setShowCart] = useState(false); // Novo estado para controlar a exibição do Cart

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await axios.get(`/items/${id}`);
        const fetchedItem = response.data.data;
        setItem(fetchedItem);
      } catch (error) {
        console.error(error);
      }
    };

    fetchItem();
  }, [id]);

  if (!item) {
    return <p>Carregando...</p>;
  }

  const handleClick = () => {
    setShowCart(true); // Exibe o componente Cart
  }

  return (
    <Container>
      <img src={item.attributes.image} alt={item.attributes.image_alt} />
      <PostContainer theme={context.theme}> 
        <h1>{item.attributes.title}</h1>
        <p>{item.attributes.description}</p>
        <p>{item.attributes.size}</p>
        <p>R$: {item.attributes.value}</p>
        <Button onClick={handleClick}>Adicionar no Carrinho</Button >
        {showCart && <Cart user={context.user.id} item={item} />} {/* Renderiza o componente Cart */}
      </PostContainer>
    </Container>
  );
};

export default IndividualPost;
