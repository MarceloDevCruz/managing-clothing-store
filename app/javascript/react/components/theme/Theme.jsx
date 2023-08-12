import React, { useContext, useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { CreateContext } from '../../context/CreateContext';
import { Container, Sun, Moon} from './styled'

const ToggleTheme = () => {
  const context = useContext(CreateContext);
  const [button, setButton] = useState(true);

  const handleTheme = () => {
    const changeTheme = context.theme === 'light' ? 'dark' : 'light';
    context.setTheme(changeTheme);
    setButton(!button);
  };

  return (
    <Container onClick={handleTheme}>
      {button ? (
        <Sun><FaSun/></Sun>
      ) : (
        <Moon><FaMoon/></Moon>
      )}
    </Container>
  );
};

export default ToggleTheme;