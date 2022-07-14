import React from "react";
import { icons } from "./icons";
import {
  Wrapper,
  Item,
  Link
} from "./styled";

export const SocialNetworks = () => (
  <Wrapper>
    {icons.map((item, index) => {
      return (
        <Item key={index}>
          <Link target="_blank" href={item.link}>
            {item.icon}
          </Link>
        </Item>
      )
    })}
  </Wrapper>
);
