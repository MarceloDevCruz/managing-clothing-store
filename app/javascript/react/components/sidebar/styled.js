import styled from 'styled-components';
import { Link as RouterLink, useLocation } from 'react-router-dom';

export const Container = styled.section`
  grid-area: 1 / 1 / span 2 / span 1;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 19vw;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  background-color: #fff;

  @media only screen and (max-width: 900px) {
    display: none;
  }

  img {
    width: 50%;
    margin: 30px 0;
  }
`;

export const ContainerDark = styled(Container)`
  background-color: #050406;
`;

export const ContainerLight = styled(Container)``;

export const UlContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  li,
  a {
    margin: 12px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 0.4px;
    color: #67c79f;
    font-weight: 700;
    font-size: 16px;
  }

  svg {
    display: flex;
    align-items: center;
    color: #67c79f;
    font-size: 3rem;
    margin-right: 10px;
  }
`;

export const StyledLink = styled(RouterLink)`
  display: flex;
  align-items: center;
  color: #67c79f;
  font-weight: 600;
  font-size: 16px;
  text-decoration: none;
  margin: 10px 0;
  padding: 8px;
  transition: background-color 0.3s ease;

  svg {
    margin-right: 10px;
    font-size: 20px;
  }

  &:hover {
    background-color: rgba(103, 199, 159, 0.2);
  }

  ${(props) =>
    props.isActive &&
    `
    border-left: 2px solid #67c79f;
    color: #fff;
  `}
`;

export const Btn = styled.button`
  display: none;

@media only screen and (max-width: 900px) {
  display: flex;
  position: fixed;
  top: 10px;
  left: 10px;
  z-index: 9999999999;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: none;
  background-color: #67c79f;
  border-radius: 50%;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
}
`;

export default StyledLink;
