import styled from "styled-components";

export const Button = styled('a')`
  width: 150%;
  font-size: 2vw;
  color: #ffffff;
  text-align: center;
  border-radius: 5px;
  text-decoration: none;
  background-color: #ff8040;
`;

export const Container = styled('header')`
  height: 10vw;
  padding: 1vw;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom: 4px solid #ff8040;
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
`;

export const Name = styled('h1')`
  color: #ff8040;
  font-size: 4vw;
`;
