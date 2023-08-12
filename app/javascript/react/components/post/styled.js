import styled from "styled-components"

export const Container = styled.div`
    margin: 4rem 2rem;
    border-radius: 10px;
    height: 50rem;
    width: 42rem;
    display: flex;
    flex-direction: column;
    align-items: left;
    background-color: ${(props) => (props.theme === 'dark' ? '#0a0b0a' : 'white')};
    padding: 10px;

    @media only screen and (max-width: 1150px) {
      width: 34rem;
      height: 44rem;
      margin: 2.5rem 1rem;
    }

    @media only screen and (max-width: 360px) {
      width: 28rem;
      height: 38rem;
    }

    @media only screen and (max-width: 300px) {
      width: 20rem;
      height: 32rem;
    }

  h3 {
    font-size: 22px;
    letter-spacing: 2px;
    margin: 1rem 0;
    color:  ${(props) => (props.theme === 'dark' ? '#f8f8f8' : 'rgba(0,0,0, 0.8)')};
    font-weight: 700;
  }

  small, p {
    color:  ${(props) => (props.theme === 'dark' ? '#f8f8f8' : 'rgba(0,0,0, 0.8)')};
  }

    svg {
        color:#67c79f;
        font-size: 2.5rem;
        cursor: pointer;
    }

    img {
    width: 97%;
    height: 33vh;
    border-radius: 10px;
    align-self: center;
    object-fit: cover; 
    object-position: center; 
    }
`;

export const Vectors = styled.div`

    display: flex;
    gap: 10px;
    margin: 0;
`

export const InlineButton = styled.div`

a {
    display: inline-block;
    font-size: 1.4rem;
    letter-spacing: .5px;
    color: #67c79f;
    margin: 1.5rem 0;
    text-transform: lowercase;
    font-weight: 600;
}
`;

export const PopupWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

export const PopupContainer = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  z-index: 1;
  background-color: ${(props) => (props.theme === 'dark' ? '#111111' : 'rgba(252, 252, 252, 0.95)')};
  border: 1px solid ${(props) => (props.theme === 'light' ? '#111111' : 'rgba(252, 252, 252, 0.95)')};
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
`;
