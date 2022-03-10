import { Wrapper, Item } from "../../list";

export const List = () => {
  const learnNext = ["JS classes", "React Context", "TypeScript"];

  return (
    <Wrapper>
      {learnNext.map((item, index) => {
        return <Item key={index}>{item}</Item>
      })}
    </Wrapper>
  )
};