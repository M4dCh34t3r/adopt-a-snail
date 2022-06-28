import List from "../../components/list/List";
import Title from "../../components/title/Title";
import Header from "../../components/header/Header";

export function Home() {
  return(
    <>
      <Header/>
      <Title text="Pick a shell buddy..." subtext="And have a lot o fun together!"/>
      <List snails={[
            {
              id: 1,
              name: 'Ana',
              description: 'Ana description',
              image: '/ana.png'
            },
            {
              id: 2,
              name: 'Bob',
              description: 'Bob description',
              image: '/bob.png'
            },
            {
              id: 3,
              name: 'John',
              description: 'John description',
              image: '/John.png'
            },
            {
              id: 4,
              name: 'Maria',
              description: 'Maria description',
              image: '/maria.png'
            }
          ]}
        />
    </>
  );
}
