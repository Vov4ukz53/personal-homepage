import { Wrapper, Item } from "../../List";
import { skillset } from "./skillset";

export const List = () => (
  <Wrapper>
    {skillset.map((skill) =>
      <Item key={skill}>{skill}</Item>
    )}
  </Wrapper>
);
