import styled from "styled-components"

export const Tr = styled.tr``;

export const Td = styled.td`
  padding-top: 15 px;
  text-align: ${(props) => (props.alighCenter ? "center" : "start")};
  word-break: break-all;

  svg {
    width: 18px;
    
  } 
  `