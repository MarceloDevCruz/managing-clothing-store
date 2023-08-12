import styled from "styled-components"

export const Container = styled.div`

grid-column: 2/-1;
grid-row: 1/-1;

display: flex;
align-items: center;
margin: 2rem;

img {
  border: 1px solid black;
  border-radius: 10px;
  height: 60rem;
  width: 70rem;
  align-self: center;
  object-fit: cover; 
  object-position: center; 
}

`

export const PostContainer = styled.div`
  margin: 4rem;

  h1 {
    font-size: 30px;
    font-weight: 600;
    letter-spacing: 0.3px;
    color:  ${(props) => (props.theme === 'dark' ? '#f8f8f8' : 'rgba(0,0,0, 0.8)')};
    margin: 0.8rem 0;
  }

  small, p {
    color:  ${(props) => (props.theme === 'dark' ? '#f8f8f8' : 'rgba(0,0,0, 0.8)')};
  }
`;

export const CommentsContainer = styled.div`
  h2 {
    font-size: 22px;
    letter-spacing: 2px;
    margin: 1rem 0;
    color:  ${(props) => (props.theme === 'dark' ? '#f8f8f8' : 'rgba(0,0,0, 0.8)')};
    font-weight: 700;
  }

  small, p {
    color:  ${(props) => (props.theme === 'dark' ? '#f8f8f8' : 'rgba(0,0,0, 0.8)')};
  }
`;

export const CommentForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;

    input,
  textarea {
    padding: 10px;
    border: none;
    border: 1px solid ${(props) => (props.theme === 'dark' ? 'rgba(0,0,0,0.8)' : 'none')};
    background-color: ${(props) => (props.theme === 'light' ? 'transparent' : 'transparent')};
    border-radius: 4px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease;
    width: 60%;
    margin-bottom: 15px;
    color: ${(props) => (props.theme === 'dark' ? '#f8f8f8' : 'rgba(0,0,0,0.8)')};
  }

  textarea {
    width: 35rem;
    height: 13rem;
  }

  input:focus,
  textarea:focus {
    outline: none;
    box-shadow: 0 4px 8px rgba(76, 85, 120, 0.3);
  }

  button {
    margin-top: 2rem;
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
  }

  label {
    margin: 0.5rem;
    font-weight: 500;
    color: #67c79f;
    font-size: 18px;
    cursor: pointer;
    display: block;
  }

  span {
    margin-top: 0.5rem;
    color: ${(props) => (props.theme === 'dark' ? '#f8f8f8' : 'rgba(0,0,0,0.8)')};
  }
`;

