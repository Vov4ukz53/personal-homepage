import { Section } from "../../../common/Section";
import { Icon, Title } from "../../../common/title";
import { List } from "./List";
import icon from "./icon.png";

export const LearnNext = () => (
  <Section
    title={
      <>
        <Title>What I want to learn next</Title>
        <Icon src={icon} alt="" />
      </>
    }
    body={<List />}
  />
);