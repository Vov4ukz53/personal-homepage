import { Wrapper, Header } from "./styled";

interface SectionProps {
  title: string | JSX.Element;
  body: JSX.Element;
};

export const Section = ({ title, body }: SectionProps) => (
  <Wrapper>
    <Header>
      {title}
    </Header>
    {body}
  </Wrapper>
);