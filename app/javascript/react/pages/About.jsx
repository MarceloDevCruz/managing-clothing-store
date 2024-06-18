import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    grid-column: 2/-1;
    grid-row: 2/-1;
    padding: 20px;
    width: 80%;
    margin: 0 auto;

    @media only screen and (max-width: 900px) {
        grid-column: 1/-1;
    }
`;

const About = () => {
  return (
    <Container >
        <h1>Projeto ES4A4 - Engenharia de Software 4</h1>
        <p>Este site é um projeto desenvolvido para a disciplina de ES4A4 - Engenharia de Software 4, do curso de Análise e Desenvolvimento de Software no Instituto Federal de São Paulo (IFSP).</p>
        <h2>Integrantes do Projeto</h2>
        <ul >
            <li><strong>Marcelo Cruz - SP3068862 </strong></li>
            <li><strong>Matheus Savóia- SP3097781</strong></li>
            <li><strong>Laryssa Marchi- SP3080676 </strong></li>
            <li><strong>Guilherme Lourenço SP3097765 </strong></li>
        </ul>
        <p>Agradecemos a oportunidade de aplicar nossos conhecimentos e habilidades adquiridos durante o curso, e esperamos que este trabalho seja útil e informativo para todos os usuários.</p>
    </Container>  )
}

export default About