import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { CreateContext } from '../context/CreateContext';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  grid-column: 2/-1;
  grid-row: 2/-1;
  margin: 0 auto;

  @media only screen and (max-width: 900px) {
    grid-column: 1/-1;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Input = styled.input`
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  margin-top: 2rem;
  padding: 12px 24px;
  background-color: #67c79f;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.1px;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #0056b3;
  }
`;

const Message = styled.div`
  margin-top: 1rem;
  padding: 10px;
  border-radius: 4px;
  font-size: 16px;
  color: #fff;
  background-color: ${props => (props.error ? '#f44336' : '#4caf50')};
`;

const Profile = () => {
  const params = useParams();
  const id = Number(params.id);
  
  const [address, setAddress] = useState({
    zip_code: '',
    neighborhood: '',
    street: '',
    city: '',
    number: '',
    complement: '',
    user_id: id
  });


  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const data = {
    user_id: id
  };

  useEffect(() => {
    const fetchAddress = async () => {
      try {
        const response = await axios.get(`/addresses/${id}`);
        const fetchedAddress = response.data.address;
        if (fetchedAddress) {
          setAddress(fetchedAddress);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchAddress();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress({ ...address, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/addresses', address);
      setMessage('Endereço atualizado com sucesso!');
      setError('');
    } catch (error) {
      setError('Error creating address');
      setMessage('');
      console.error('Error creating address', error);
    }
  };

  return (
    <Container>
      <h1>Cadastre o seu endereço</h1>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="zip_code"
          value={address.zip_code}
          onChange={handleChange}
          placeholder="CEP"
          required
        />
        <Input
          type="text"
          name="neighborhood"
          value={address.neighborhood}
          onChange={handleChange}
          placeholder="Bairro"
          required
        />
        <Input
          type="text"
          name="street"
          value={address.street}
          onChange={handleChange}
          placeholder="Rua"
          required
        />
        <Input
          type="text"
          name="city"
          value={address.city}
          onChange={handleChange}
          placeholder="Cidade"
          required
        />
        <Input
          type="text"
          name="number"
          value={address.number}
          onChange={handleChange}
          placeholder="Numero"
          required
        />
        <Input
          type="text"
          name="complement"
          value={address.complement}
          onChange={handleChange}
          placeholder="Complemento"
        />
        <Input
          type="hidden"
          name="user_id"
          value={address.user_id}
          onChange={handleChange}
        />
        <Button type="submit">Cadastrar Endereço</Button>
      </Form>
      {message && <Message>{message}</Message>}
      {error && <Message error>{error}</Message>}
    </Container>
  );
};

export default Profile;
