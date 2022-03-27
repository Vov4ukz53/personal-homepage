import { Wrapper, Item } from "../../List";
import { learnNextList } from "./learnNextList";

export const List = () => (
  <Wrapper>
    {learnNextList.map((item, index) => {
      return <Item key={index}>{item}</Item>
    })}
  </Wrapper>
);
