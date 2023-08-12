import React, { useContext, useEffect } from 'react';
import { Container, FormContainer, Input, Button, Title, Label, InputGroup, ErrorMessage } from './styled';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { CreateContext } from '../../context/CreateContext';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const context = useContext(CreateContext);
  const navigate = useNavigate();

  const { handleSubmit, register, formState: { errors } } = useForm();

  useEffect(() => {
    const fetchCsrfToken = async () => {
      try {
        const response = await axios.get('/csrf-token');
        axios.defaults.headers.common['X-CSRF-Token'] = response.data.csrfToken;
      } catch (error) {
        console.error(error);
      }
    };

    fetchCsrfToken();
  }, []);

  const onSubmit = (data) => {
    axios
      .post('/users', data)
      .then((response) => {
        console.log(response.data);
        navigate('/login');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Container theme={context.theme}>
      <FormContainer theme={context.theme}>
        <Title theme={context.theme}>Faça seu Cadastro</Title>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputGroup>
            <Label>Nome</Label>
            <Input type="text" {...register('name', { required: 'Campo obrigatório' })} placeholder="Digite seu nome" />
            {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
          </InputGroup>
          <InputGroup>
            <Label>Email</Label>
            <Input type="email" {...register('email', { required: 'Campo obrigatório' })} placeholder="Digite seu email" />
            {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
          </InputGroup>
          <InputGroup>
            <Label>Senha</Label>
            <Input type="password" {...register('password', { required: 'Campo obrigatório' })} placeholder="Digite sua senha" />
            {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
          </InputGroup>
          <Button type="submit">Cadastrar</Button>
        </form>
      </FormContainer>
    </Container>
  );
};

export default Register;
