import { Wrapper, Header } from "./styled";

export const Section = ({ title, body }) => (
  <Wrapper>
    <Header>
      {title}
    </Header>
    {body}
  </Wrapper>
);