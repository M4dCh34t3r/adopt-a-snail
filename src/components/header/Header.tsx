import { Container, Logo, Name } from './Heading.style';

export default function Header() {
  return(
    <Container>
      <Logo src="/logo.svg" alt="Adopt a snail"/>
      <Name>
        Adopt a snail
      </Name>
    </Container>
  );
}
