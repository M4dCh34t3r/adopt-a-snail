import styled from "styled-components";

export const Button = styled('a')`
  width: 150%;
  font-size: 2vw;
  color: #ff8040;
  text-align: center;
  border-radius: 5px;
  text-decoration: none;
  transition: all 0.25s ease;
  background-color: #ffffff;

  @media(max-width: 800px) {
    font-size: 3vw;
  }
`;

export const Container = styled('header')`
  height: 10vw;
  display: flex;
  border-radius: 5px;
  align-items: center;
  background-color: #ff8040;
  justify-content: space-around;
  
  @media(max-width: 800px) {
    height: 20vw;
    justify-content: space-evenly;
  }
`;

export const Links = styled('div')`
  display: flex;
  min-height: 100%;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const Logo = styled('img')`
  width: 10vw;
  height: 10vw;
  
  @media(max-width: 800px) {
    width: 15vw;
    height: 15vw;
  }
`;

export const Name = styled('h1')`
  font-size: 4vw;
`;
