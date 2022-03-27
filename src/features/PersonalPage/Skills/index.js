import { Section } from "../../../common/Section";
import { Icon, Title } from "../../../common/Title";
import { List } from "./List";
import icon from "./icon.png";

export const Skills = () => (
  <Section
    title={
      <>
        <Title>My skillset includes</Title>
        <Icon src={icon} />
      </>
    }
    body={<List />}
  />
);