import { Snail } from '../../data/@types/snail';
import { TextLimiter } from '../../services/utils/textLimiter';
import { Button, ListWrapper, Description, Image, Info, ListItem, Name } from './style'

interface ListProps {
  snails: Snail[];
}

export default function List(props: ListProps) {
  const textMinSize = 100;
  return(
    <ListWrapper>
      {props.snails.map(snail => (
        <ListItem key={ snail.id }>
          <Image src={ snail.image } alt={ snail.name }/>
          <Info>
            <Name> { snail.name } </Name>
            <Description>
              { TextLimiter.limit(snail.description, textMinSize) }
              </Description>
            <Button>
              Adopt { snail.name }!
            </Button>
          </Info>
        </ListItem>
      ))}
    </ListWrapper>
  );
}
