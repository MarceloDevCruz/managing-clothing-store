import styled from "styled-components"

export const Container = styled.div`
    margin: 4rem 1rem;
    -webkit-box-shadow: 0px 0px 40px -25px rgba(76,85,120,0.7);
    -moz-box-shadow: 0px 0px 40px -25px rgba(76,85,120,0.7);
    box-shadow: 0px 0px 40px -25px rgba(76,85,120,0.7);
    border-radius: 10px;
    height: 70px;
    width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: transform 0.3s ease;
    position: relative;

    &:hover {
    transform: scale(1.05);
  }

  h3 {
    font-size: 26px;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin: 2rem;
    color: #4C5578;
    text-align: center;
    font-weight: 700;
  }

    svg {
        color: red;
        font-size: 2rem;
        cursor: pointer;
        position: absolute;
        top: 0;
        right: 0;
    }

    h1 {
        font-size: 20px;
    }
`;
