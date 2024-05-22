import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;
  border-radius: 10px;

  background-color: lightblue;
  width: 570px;
  height: 570px;

`;

function Cart(props) {


  console.log(props.user)
  console.log(props.item)



  return(
    <Container>HELLO WORLD</Container>
  )
}

export default Cart