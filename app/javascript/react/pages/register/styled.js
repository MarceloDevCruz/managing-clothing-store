import styled from "styled-components"

export const Container = styled.div`

  grid-area: 1 / 2 / span 2 / span 1;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-image: url(${(props) => (props.theme === 'dark' ? '/background_dark.png' : '/background.png')});
  background-size: cover;
`
export const FormContainer = styled.div`
  background-color: ${(props) => (props.theme === 'dark' ? 'transparent' : '#f8f8f8')};
  padding: 30px;
  border-radius: 10px;
  box-shadow: ${(props) => (props.theme === 'dark' ? 'none' : '0 4px 16px rgba(0, 0, 0, 0.1)')};
  max-width: 500px;
  width: 100%;
  text-align: center;

  label {
    color: ${(props) => (props.theme === 'dark' ? 'rgba(0, 0, 0, 0.8)' : 'none')};
  }
`;

export const Title = styled.h1`
  font-size: 28px;
  font-weight: 500;
  letter-spacing: 0.2px;
  color: ${(props) => (props.theme === 'dark' ? 'rgba(0, 0, 0, 0.8)' : '#67c79f')};
  margin-bottom: 20px;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;
`;

export const Label = styled.label`
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 0.2px;
  color: #67c79f;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

export const Button = styled.button`
  padding: 12px 24px;
  background-color: #67c79f;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.1px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #215841;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  margin-top: 5px;
`;
