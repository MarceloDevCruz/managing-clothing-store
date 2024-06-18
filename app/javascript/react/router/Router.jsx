import React, { useContext } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { Container } from './styled';

import Home from "../pages/home/Home";
import Register from '../pages/register/Register';
import Login from '../pages/login/Login';
import CartPage from "../pages/cart/CartPage";
import Theme from '../components/theme/Theme';

import Sidebar from '../components/sidebar/Sidebar';
import { CreateContext } from '../context/CreateContext';
import IndividualPost from '../pages/individualPost/IndividualPost';
import Profile from '../pages/Profile';
import About from '../pages/About'

const Router = () => {

  const context = useContext(CreateContext)

  return (
    <BrowserRouter>
      <Container theme={context.theme}>
        <Theme />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={context.isLogged ? <CartPage /> : <Navigate to="/login" />} />
          <Route path="/item/:id" element={context.isLogged ? <IndividualPost /> : <Navigate to="/login" />} />
          <Route path="/address/:id" element={context.isLogged ? <Profile /> : <Navigate to="/login" />} />
          <Route path="/about" element={<About />} />
          <Route path="/:user_id/cart/:id" element={context.isLogged ? <Profile /> : <Navigate to="/login" />} />
        </Routes>
      </Container>
    </BrowserRouter>
  )
}

export default Router;