import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Container, FormContainer, Input, Button, Title, Label, InputGroup, ErrorMessage } from './styled';
import { useForm } from 'react-hook-form';
import { CreateContext } from '../../context/CreateContext';
import { useNavigate } from 'react-router-dom';
import Popup from '../../components/popup/Popup';

const Login = () => {
  const context = useContext(CreateContext);
  const navigate = useNavigate();

  const { handleSubmit, register, setValue, formState: { errors } } = useForm();

  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [popupType, setPopupType] = useState('');

  const onSubmit = (data) => {
    const { email, password } = data;

    axios
      .post('/login', data)
      .then((response) => {
        const userData = response.data.user;
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);

        context.setUser(userData);
        context.setIsLogged(true);
        navigate('/');
      })
      .catch((error) => {
        console.error(error);
        setPopupMessage('Erro ao fazer login, Email ou senha incorretas');
        setPopupType('error');
        setShowPopup(true);
      });
  };

  useEffect(() => {
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');

    if (storedEmail && storedPassword) {
      setValue('email', storedEmail);
      setValue('password', storedPassword);
      handleSubmit(onSubmit)();
    }
  }, [setValue, handleSubmit]);

  return (
    <Container theme={context.theme}>
      {showPopup && <Popup message={popupMessage} type={popupType} onClose={() => setShowPopup(false)} />}
      <FormContainer theme={context.theme}>
        <Title theme={context.theme}>Faça Login</Title>
        <form onSubmit={handleSubmit(onSubmit)}>
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
          <Button type="submit">Login</Button>
        </form>
      </FormContainer>
    </Container>
  );
};

export default Login;
