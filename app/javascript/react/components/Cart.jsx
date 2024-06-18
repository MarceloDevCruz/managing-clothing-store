import React, { useState } from "react";
import styled from "styled-components";
import axios from 'axios';

const Container = styled.div`
  border-top: 1px solid grey;
  border-bottom: 1px solid grey;
  margin: 10px 0;
  padding: 8px;
  width: 100%;
`;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Button = styled.button`
  padding: 5px 10px;
  background-color: red;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width:400px;

  &:hover {
    background-color: darkred;
  }
`;

function Cart({ item, id, item_quantity, address }) {
  const [quantity, setQuantity] = useState(item.quantity);
  const [quan, setQuan] = useState(item_quantity);

  const decrementQuantity = () => {
    if (quan > 0) {
      if (quantity > 0) {
        setQuantity(quantity - 1);

        axios.patch(`/items/${id}/update_quantity`, null, {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then(response => {
          const data = response.data;
          console.log('Response data:', data);
          setQuan(quan - 1);
          if (!data.success) {
            setQuantity(quantity);
            alert(data.error);
          } else if (data.quantity === 0) {
            console.log('Item deleted');
          }
        })
        .catch(error => {
          setQuantity(quantity);
          console.error('Error:', error);
        });
      }
    }
  };

  if (quan === 0) {
    return null;
  }

  return (
    <Container>
      <ItemContainer>
        <p>Título: {item.title}</p>
        <p>Descrição: {item.description}</p>
        <p>Cor: {item.color}</p>
        <p>Valor: R$ {item.value}</p>
        <p>Quantidade: {quan}</p>
        <p>Endereço: {address.city}, {address.neighborhood} ,{address.street}, {address.number} </p>
        <Button onClick={decrementQuantity}>Comprar</Button>
      </ItemContainer>
    </Container>
  );
}

export default Cart;
