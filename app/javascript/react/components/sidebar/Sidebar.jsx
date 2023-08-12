import React, { useContext, useState } from 'react';
import { CreateContext } from '../../context/CreateContext';
import { ContainerDark, ContainerLight, UlContainer, Btn } from './styled';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import { BiLogOut, BiLogIn } from 'react-icons/bi';
import { MdOutlineSpaceDashboard } from 'react-icons/md';
import { IoCreateOutline } from 'react-icons/io5';
import { HiOutlineUserGroup, HiOutlineWrench, HiOutlineUserPlus } from 'react-icons/hi2';
import StyledLink from './styled';
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from 'react-icons/bs'


const Sidebar = () => {
  const [button, setButton] = useState(false);
  const [sidebar, setSidebar] = useState(true);
  const context = useContext(CreateContext);
  const navigate = useNavigate();
  const { handleSubmit } = useForm();
  const location = useLocation();

  const handleButton = () => {
    setButton(!button);
    setSidebar(!sidebar);
  };

  const handleLogout = async () => {
    try {
      const response = await axios.delete('/logout');
      if (response.status === 200) {
        console.log('Logout bem-sucedido');
        context.setIsLogged(false);
        localStorage.removeItem('email');
        localStorage.removeItem('password');
        navigate('/');
      } else {
        console.log('Erro no logout:', response.data.error);
      }
    } catch (error) {
      console.log('Erro na solicitação:', error);
    }
  };

  return (
    <>
      {sidebar && (
        <>
          {context.theme === 'dark' ? (
            <ContainerDark >
              <img src="/Walljobs.png" alt="Walljobs logo" onClick={() => navigate('/')} />
              <UlContainer>
                {!context.isLogged ? (
                  <>
                    <li>
                      <StyledLink to="/register" isActive={location.pathname === '/register'}>
                        <HiOutlineUserPlus />
                        Registrar
                      </StyledLink>
                    </li>
                    <li>
                      <StyledLink to="/login" isActive={location.pathname === '/login'}>
                        <BiLogIn />
                        Login
                      </StyledLink>
                    </li>
                    <li>
                      <StyledLink to="/about" isActive={location.pathname === '/about'}>
                        <HiOutlineUserGroup />
                        Sobre Projeto
                      </StyledLink>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <StyledLink to="/" isActive={location.pathname === '/'}>
                        <MdOutlineSpaceDashboard />
                        Posts
                      </StyledLink>
                    </li>
                    <li>
                      <StyledLink to="/createpost" isActive={location.pathname === '/createpost'}>
                        <IoCreateOutline />
                        Criar Post
                      </StyledLink>
                    </li>
                    <li>
                      <StyledLink to="/config" isActive={location.pathname === '/config'}>
                        <HiOutlineWrench />
                        Configurações
                      </StyledLink>
                    </li>
                    <li>
                      <StyledLink to="/about" isActive={location.pathname === '/about'}>
                        <HiOutlineUserGroup />
                        Sobre Projeto
                      </StyledLink>
                    </li>
                    <li>
                      <StyledLink
                        to="/delete"
                        isActive={location.pathname === '/delete'}
                        onClick={handleSubmit(handleLogout)}
                      >
                        <BiLogOut />
                        Logout
                      </StyledLink>
                    </li>
                  </>
                )}
              </UlContainer>
            </ContainerDark>
          ) : (
            <ContainerLight >
              <img src="/Walljobs.png" alt="Walljobs logo" onClick={() => navigate('/')} />
              <UlContainer>
                {!context.isLogged ? (
                  <>
                    <li>
                      <StyledLink to="/register" isActive={location.pathname === '/register'}>
                        <HiOutlineUserPlus />
                        Registrar
                      </StyledLink>
                    </li>
                    <li>
                      <StyledLink to="/login" isActive={location.pathname === '/login'}>
                        <BiLogIn />
                        Login
                      </StyledLink>
                    </li>
                    <li>
                      <StyledLink to="/about" isActive={location.pathname === '/about'}>
                        <HiOutlineUserGroup />
                        Sobre Projeto
                      </StyledLink>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <StyledLink to="/" isActive={location.pathname === '/'}>
                        <MdOutlineSpaceDashboard />
                        Posts
                      </StyledLink>
                    </li>
                    <li>
                      <StyledLink to="/createpost" isActive={location.pathname === '/createpost'}>
                        <IoCreateOutline />
                        Criar Post
                      </StyledLink>
                    </li>
                    <li>
                      <StyledLink to="/config" isActive={location.pathname === '/config'}>
                        <HiOutlineWrench />
                        Configurações
                      </StyledLink>
                    </li>
                    <li>
                      <StyledLink to="/about" isActive={location.pathname === '/about'}>
                        <HiOutlineUserGroup />
                        Sobre Projeto
                      </StyledLink>
                    </li>
                    <li>
                      <StyledLink
                        to="/delete"
                        isActive={location.pathname === '/delete'}
                        onClick={handleSubmit(handleLogout)}
                      >
                        <BiLogOut />
                        Logout
                      </StyledLink>
                    </li>
                  </>
                )}
              </UlContainer>
            </ContainerLight>
          )}
        </>
      )}
    </>
  );
};

export default Sidebar;