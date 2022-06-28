import styled from "styled-components";

export const Button = styled('a')`
  width: 25vw;
  font-size: 3vw;
  color: #ffffff;
  text-align: center;
  border-radius: 5px;
  text-decoration: none;
  background-color: #ff8040;
`;

export const ListWrapper = styled('ul')`
  width: 60vw;
  border: 50px;
  margin: auto;
  display: flex;
  background: #f0f0f0;
  border-radius: 10px;
  flex-direction: column;
  justify-content: space-around;


`;

export const ListItem = styled('li')`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export const Name = styled('h2')`
  margin: 0;
`;

export const Description = styled('p')`
  margin: 0;
  word-break: break-word;
`;

export const Image = styled('img')`
  width: 20vw;
  border-radius: 50%;
`;

export const Info = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;
