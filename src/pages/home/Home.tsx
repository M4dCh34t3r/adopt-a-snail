import List from "../../components/list/List";
import Title from "../../components/title/Title";
import Header from "../../components/header/Header";

export function Home() {
  return(
    <>
      <Header/>
      <Title text="Pick a shell buddy..." subtext="And have a lot of fun together!"/>
      <List snails={[
            {
              id: 1,
              name: 'Ana Shelldon',
              description:'Lorem ipsum dolor sit amet. Shelldon Shelldon Shelldon ana Shelldon ana Shelldon ana ana. Ana Shelldon ana Shelldon ana Shelldon ana Shelldon Shelldon ana Shelldon Shelldon Shelldon.',
              image: '/ana.png'
            },
            {
              id: 2,
              name: 'Bob Shells',
              description: 'Lorem ipsum dolor sit amet. Bob bob Shells Shells Shells bob Shells Shells. Bob Shells bob bob Shells Shells. Shells bob Shells Shells Shells. Bob Shells Shells Shells Shells bob Shells?',
              image: '/bob.png'
            },
            {
              id: 3,
              name: 'John Shelly',
              description: 'Lorem ipsum dolor sit amet. Shelly john Shelly john john Shelly Shelly Shelly Shelly! John Shelly. . John Shelly.',
              image: '/john.png'
            },
            {
              id: 4,
              name: 'Maria Shellington',
              description: 'Lorem ipsum dolor sit amet. Shellington maria maria maria Shellington maria maria Shellington maria maria. Maria maria maria Shellington Shellington maria.',
              image: '/maria.png'
            }
          ]}
        />
    </>
  );
}
