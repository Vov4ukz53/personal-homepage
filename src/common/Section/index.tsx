import { Wrapper, Header } from "./styled";

interface Section {
  title: string;
  body: JSX.Element;
};

export const Section = ({ title, body }: Section) => (
  <Wrapper>
    <Header>
      {title}
    </Header>
    {body}
  </Wrapper>
);