import styled from 'styled-components';

export const Container = styled.div`

  position: fixed;
  top: 92%;
  left: 7%;
  padding: 1px;
  height: 24px;
  width: 50px;
  border-radius: 50px;
  border: 2px solid #67c79f;
  display: flex;
  align-items: center;
  z-index: 200;
  cursor: pointer;
`;

export const Sun = styled.div`
    font-size: 1.4rem;
    color: #215841;
    transform: translateX(74px);
    transform: translateY(2px);
`;

export const Moon = styled.div`
    font-size: 1.2rem;
    color: #215841;
    transform: translateX(30px) rotate(210deg);
`;
