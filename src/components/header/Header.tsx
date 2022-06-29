import React from 'react';
import { Button, Container, Links, Logo, Name } from './style';

export default function Header() {
  const anchorMouseOverHandler = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const btn: HTMLAnchorElement = event.currentTarget;
    btn.style.backgroundColor = "#ffd5bf";
    btn.style.color = "#ffffff";
  };

  const anchorMouseOutHandler = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const btn: HTMLAnchorElement = event.currentTarget;
    btn.style.backgroundColor = "#ffffff";
    btn.style.color = "#ff8040";
  };

  return(
    <Container>
      <Logo src="/logo.svg" alt="Adopt a snail"/>
      <Name> ADOPT A SNAIL </Name>
      <Links>
        <Button href="#" 
        onMouseOver={ anchorMouseOverHandler }
        onMouseOut={ anchorMouseOutHandler }>
        Sign in
        </Button>
        <Button href="#"
        onMouseOver={ anchorMouseOverHandler }
        onMouseOut={ anchorMouseOutHandler }>
        Sign up
        </Button>
      </Links>
    </Container>
  );
}
