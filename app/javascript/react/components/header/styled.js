import styled, {css} from "styled-components"

const expandedInputStyles = css`
  width: 300px;
`;

export const Container = styled.section`
  grid-column: 2/-1;
  grid-row: 1/2;

  display: flex;
  flex-direction: column;
  height: 220px;
  margin: 0 10px;

  @media only screen and (max-width: 900px) {
    grid-column: 1/-1;
  }
`;

export const SearchContainer = styled.section`
  height: 45%;
  border-bottom: 1px solid rgba(103, 199, 159, 0.1);
  border-top: 1px solid rgba(103, 199, 159, 0.1);
  margin: 10px 0;
  background-color: ${(props) => (props.theme === 'dark' ? '#111111' : 'rgba(252, 252, 252, 0.95)')};


  display: flex;
  padding: 20px 70px;
  justify-content: end;
  align-items: center;

  img {
    border-radius: 50%;
    width: 40px;
    margin-left: 1.5rem;
    cursor: pointer;
  }

  form {
    position: relative;
  }

  input {
    width: 70px;
    height: 35px;
    border: none;
    border: 1px solid rgba(103, 199, 159, 0.2);
    border-radius: 20px;
    background-color: transparent;
    transition: 0.3s ease-in-out;
    padding: 1rem;
    color: #67c79f;

    &:focus {
      outline: none;
      ${(props) => props.expandInput && expandedInputStyles}
    }

    &[type="search"]::-webkit-search-decoration,
    &[type="search"]::-webkit-search-cancel-button,
    &[type="search"]::-webkit-search-results-button,
    &[type="search"]::-webkit-search-results-decoration {
      display: none;
    }
  }

  svg {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    font-size: 1.2em;
    color: #67c79f;
    cursor: pointer;
  }
`;

export const TextContainer = styled.div`
  height: 45%;
  border-bottom: 1px solid rgba(103, 199, 159, 0.1);
  border-top: 1px solid rgba(103, 199, 159, 0.1);

  margin: 10px 0;
  display: flex;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => (props.theme === 'dark' ? '#111111' : 'rgba(252, 252, 252, 0.95)')};

  h1 {
    font-size: 30px;
    font-weight: 600;
    letter-spacing: 0.3px;
    color:  ${(props) => (props.theme === 'dark' ? '#f8f8f8' : 'rgba(0,0,0, 0.8)')};
    margin: 0.8rem 0;

    @media only screen and (max-width: 600px) {
      font-size: 16px;
    }
  }

  h5, h4 {
    font-weight: 600;
    color:  ${(props) => (props.theme === 'dark' ? '#f8f8f8' : 'rgba(0,0,0, 0.8)')};

    @media only screen and (max-width: 600px) {
      font-size: 12px;
    }
  }

  h4 {
    font-weight: 400;
  }

  button {
    margin: 10px 10px 10px 0;
    border: 1px solid #67c79f;
    padding: 8px;
    border-radius: 7px;
    letter-spacing: 0.6px;
    background-color: transparent;
    color: #67c79f;
    cursor: pointer;

    @media only screen and (max-width: 535px) {
      margin: 5px 5px 0;
      padding: 5px;
    }

    &:not(:disabled) {
      background-color: transparent;
      color: #67c79f;
      cursor: pointer;
    }

    &:focus,
    &:active,
    &:disabled {
      background-color: #67c79f;
      color: #fff;
      cursor: pointer;
    }
  }
`;