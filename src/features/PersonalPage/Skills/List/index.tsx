import React from "react";
import { Wrapper, Item } from "../../List";
import { skillset } from "./skillset";

export const List = () => (
  <Wrapper>
    {skillset.map((skill, index) =>
      <Item key={index}>{skill}</Item>
    )}
  </Wrapper>
);