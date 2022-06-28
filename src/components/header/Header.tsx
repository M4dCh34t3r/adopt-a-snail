import { Button, Container, Links, Logo, Name } from './style';

export default function Header() {
  return(
    <Container>
      <Logo src="/logo.svg" alt="Adopt a snail"/>
      <Name> ADOPT A SNAIL </Name>
      <Links>
        <Button href="#"> Sign in </Button>
        <Button href="#"> Sign up </Button>
      </Links>
    </Container>
  );
}
