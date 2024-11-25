import styled from "styled-components";
import { Link } from "react-router-dom";

export const Caixa1 = styled.div`
  display: flex;
  background-color: #000;
  height: 100vh;
  
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const H1 = styled.h1`
background: linear-gradient(0deg, #5A00CB 0%, #2D0065 100%);
height:69px;
display: flex;
justify-content: center;
align-items: center;
width: 1164px;
color: #fff;
`

export const Caixa = styled.div`
  display: flex;
  height: 1194px;
  border-radius: 10px;
  width: 1164px;
  background-color: #494c4e;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const Div = styled.div`
  display: flex;
  padding-top:70px !important ;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Linha1 = styled.div`
background-color: none;
  display: flex;
  flex-direction: column;
`;

export const Linha2 = styled(Linha1)`
   display: flex;
  flex-direction: column;
  
  padding-left: 100px !important;
`;

export const Linha3 = styled(Linha1)`
display: flex;
justify-content: center;

  flex-direction: column;
  `;

export const Label = styled.label`
  color: #fff;
  font-size: 20px;
`;

export const Input = styled.input`
  width: 459.24px;
  height: 40px;
  border-radius: 0px 10px 10px 10px;
  margin-bottom: 35px;
`;

export const InputDescricao = styled.input`
  width:1027.99px;
  height: 267px;
  border-radius: 10px;
  margin-bottom: 35px;
`;

export const Btn = styled.button`
  color: #fff;
  margin-top:50px !important ;
  display: flex;
  width:225px;
  height: 50px;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  text-decoration: none;
  background: linear-gradient(0deg, #5A00CB 0%, #2D0065 100%);
  padding: 6px;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background: linear-gradient(0deg, #2D0065 0%, #5A00CB 100%);
    color: #fff;
  }
`;
