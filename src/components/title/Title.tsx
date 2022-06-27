import { Text, Subtext } from './Title.style'

interface TitleProps {
  text: string;
  subtext: string;
}

export default function Title(props: TitleProps) {
  return(
    <>
      <Text> {props.text} </Text>
      <Subtext> {props.subtext} </Subtext>
    </>
  );
}
