import styled from "styled-components";

export const Button = styled('a')`
  width: 25vw;
  font-size: 3vw;
  color: #ffffff;
  text-align: center;
  border-radius: 5px;
  text-decoration: none;
  transition: all 0.5s ease;
  background-color: #ff8040;
  
  @media(max-width: 800px) {
    width: 35vw;
   margin: auto;
   font-size: 4vw;
  }
`;

export const Item = styled('li')`
  margin: 25px;
  padding: 25px;
  display: flex;
  border-radius: 5px;
  transition: all 0.5s ease;
  background-color: #e5e5e5;
  justify-content: space-evenly;
  
  @media(max-width: 800px) {
    align-items: center;
    flex-direction: column;
  }
`;

export const Name = styled('h2')`
  margin: 0;
    
  @media(max-width: 800px) {
    margin: auto;
  }
`;

export const Description = styled('p')`
  letter-spacing: 1px;
  align-items: center;
  word-break: break-word;
`;

export const Image = styled('img')`
  width: 20vw;
  height: 20vw;
  border-radius: 50%;
    
  @media(max-width: 800px) {
    width: 40vw;
    height: 40vw;
  }
`;

export const Info = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const Wrapper = styled('ul')`
  padding-inline-start: 0;
`;
