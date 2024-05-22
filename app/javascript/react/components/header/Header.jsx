import React, { useState, useContext } from "react";
import { Container, SearchContainer, TextContainer } from "./styled";
import { BsSearch } from "react-icons/bs";
import { CreateContext } from '../../context/CreateContext';

const Header = () => {
  const [expandInput, setExpandInput] = useState(false);
  const [selectedButton, setSelectedButton] = useState("crescente");
  const context = useContext(CreateContext);

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
        <div>
          <img src="user_avatar.png" alt="user avatar" />
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
