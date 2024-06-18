import React, { useContext, useEffect, useState } from 'react';
import { Container, PostContainer, Button, FlashMessage } from './styled';
import axios from 'axios';
import { CreateContext } from '../../context/CreateContext';
import { useParams } from 'react-router-dom';
import Cart from '../../components/Cart';

const IndividualPost = () => {
  const context = useContext(CreateContext);
  const params = useParams();
  const id = Number(params.id);
  const [item, setItem] = useState(null);
  const [flashMessage, setFlashMessage] = useState(null);

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

  const handleClick = async () => {
    try {
      const response = await axios.post('/carts', {
        user_id: context.user.id,
        item_id: item.id
      });
      setFlashMessage('Item adicionado ao carrinho com sucesso!');
      setTimeout(() => setFlashMessage(null), 3000); // Remove a mensagem flash após 3 segundos
    } catch (error) {
      console.error('Failed to add item to cart:', error);
      setFlashMessage('Falha ao adicionar item ao carrinho.');
      setTimeout(() => setFlashMessage(null), 3000); // Remove a mensagem flash após 3 segundos
    }
  };

  return (
    <Container>
      {flashMessage && <FlashMessage>{flashMessage}</FlashMessage>}
      <img src={item.attributes.image} alt={item.attributes.image_alt} />
      <PostContainer theme={context.theme}> 
        <h1>{item.attributes.title}</h1>
        <p>{item.attributes.description}</p>
        <p>{item.attributes.size}</p>
        <p>R$: {item.attributes.value}</p>
        <Button onClick={handleClick}>Adicionar no Carrinho</Button>
      </PostContainer>
    </Container>
  );
};

export default IndividualPost;
