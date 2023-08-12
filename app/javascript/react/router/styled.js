import styled from "styled-components"

export const Container = styled.div`
min-height: 100vh;
height: 100%;
max-width: 100vw;
width: 100%;
display: grid;
grid-template-columns: 19vw 81vw;
grid-template-rows: 21vh 79vh;
background-color: ${(props) => (props.theme === 'dark' ? '#111111' : 'rgba(252, 252, 252, 0.95)')};

`;