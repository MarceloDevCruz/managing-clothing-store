import styled from "styled-components"

export const Container = styled.div`
    grid-column: 2/-1;
    grid-row: 2/-1;

    @media only screen and (max-width: 900px) {
        grid-column: 1/-1;
    }
`;

export const PostContainer = styled.div`
    background-color: ${(props) => (props.theme === 'dark' ? 'green' : 'none')};
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin: 3rem auto;
    align-items: center;
    justify-items: center;

    @media only screen and (max-width: 1700px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media only screen and (max-width: 720px) {
        grid-template-columns: repeat(1, 1fr);
    }

`;