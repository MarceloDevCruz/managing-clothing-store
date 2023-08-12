import React, { useContext } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { Container } from './styled';

import Home from "../pages/home/Home";
import Register from '../pages/register/Register';
import Login from '../pages/login/Login';
import CreatePost from "../pages/createPost/CreatePost";
import EditPost from '../pages/editPost/EditPost';
import Theme from '../components/theme/Theme';

import Sidebar from '../components/sidebar/Sidebar';
import { CreateContext } from '../context/CreateContext';
import IndividualPost from '../pages/individualPost/IndividualPost';

const Router = () => {

  const context = useContext(CreateContext)

  return (
    <BrowserRouter>
      <Container theme={context.theme}>
        <Theme />
        <Sidebar />
        <Routes>
          <Route path="/" element={context.isLogged ? <Home /> : <Navigate to="/login" />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/createpost" element={context.isLogged ? <CreatePost /> : <Navigate to="/login" />} />
          <Route path="/editpost/:id" element={context.isLogged ? <EditPost /> : <Navigate to="/login" />} />
          <Route path="/post/:id" element={context.isLogged ? <IndividualPost /> : <Navigate to="/login" />} />
        </Routes>
      </Container>
    </BrowserRouter>
  )
}

export default Router;