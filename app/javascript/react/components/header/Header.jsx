import React, { useState, useContext } from "react";
import { Container, SearchContainer, TextContainer } from "./styled";
import { BsSearch } from "react-icons/bs";
import { CreateContext } from '../../context/CreateContext';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const [expandInput, setExpandInput] = useState(false);
  const [selectedButton, setSelectedButton] = useState("crescente");
  const context = useContext(CreateContext);


  const OpenProfile = () => {
    navigate(`/address/${context.user.id}`);
  }

  return (
    <Container>
      <SearchContainer expandInput={expandInput} theme={context.theme}>
        <form action="#">
          <input
            type="search"
            onFocus={() => setExpandInput(true)}
            onBlur={() => setExpandInput(false)}
          />
          <BsSearch />
        </form>
        <div >
          <img src="user_avatar.png" alt="user avatar" onClick={OpenProfile} />
        </div>
      </SearchContainer>

      <TextContainer theme={context.theme}>
        <div>
          <h1>Loja Fashion Souls</h1>
          <h4>Desperte Sua <strong>Essência</strong> e <strong>elegância</strong> em Cada Look</h4>
        </div>

        <div>
          <h5>Ordem:</h5>
          <button
            onClick={() => setSelectedButton("crescente")}
            disabled={selectedButton === "crescente"}
          >
            Crescente
          </button>
          <button
            onClick={() => setSelectedButton("decrescente")}
            disabled={selectedButton === "decrescente"}
          >
            Decrescente
          </button>
        </div>
      </TextContainer>
    </Container>
  );
};

export default Header;
