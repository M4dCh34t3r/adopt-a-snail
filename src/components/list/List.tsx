import { Snail } from '../../data/@types/snail';
import { TextLimiter } from '../../services/utils/textLimiter';
import { NameLimiter } from '../../services/utils/nameLimiter';
import { Button, Description, Image, Info, Item, Name, Wrapper} from './style'

interface ListProps {
  snails: Snail[];
}

export default function List(props: ListProps) {
  const anchorMouseOverHandler = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const a: HTMLAnchorElement = event.currentTarget;
    a.style.backgroundColor = "#ffaa80";
  };

  const anchorMouseOutHandler = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const a: HTMLAnchorElement = event.currentTarget;
    a.style.backgroundColor = "#ff8040";
  };

  const lIMouseOverHandler = (event: React.MouseEvent<HTMLLIElement>) => {
    const lI: HTMLLIElement = event.currentTarget;
    lI.style.backgroundColor = "#f8f8f8";
  };

  const lIMouseOutHandler = (event: React.MouseEvent<HTMLLIElement>) => {
    const lI: HTMLLIElement = event.currentTarget;
    lI.style.backgroundColor = "#e5e5e5";
  };

  const textMinSize = 96;

  return(
    <Wrapper>
      { props.snails.map(snail => (
        <Item key={ snail.id } 
          onMouseOver={ lIMouseOverHandler }
          onMouseOut={ lIMouseOutHandler }>
          <Image src={ snail.image } alt={ snail.name }/>
          <Info>
            <Name> { snail.name } </Name>
            <Description>
              { TextLimiter.limit(snail.description, textMinSize) }
              </Description>
            <Button href="#" 
            onMouseOver={ anchorMouseOverHandler }
            onMouseOut={ anchorMouseOutHandler }>
            Adopt { NameLimiter.limit(snail.name) }!
            </Button>
          </Info>
        </Item>
      )) }
    </Wrapper>
  );
}
