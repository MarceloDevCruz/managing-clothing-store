import styled from 'styled-components';

export const Container = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0.7rem;
    font-weight: 700;
  }

  button {
    display: inline-block;
    color: #67c79f;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    background-color: transparent;

    &:disabled {
      border: 1px solid #67c79f;
      background: #67c79f;
      color: white;
      cursor: default;
    }
  }
`;