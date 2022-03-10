import { Wrapper, Item } from "../../list";

export const List = () => {
  const skillset = ["Semantic & accessible HTML", "React Router", "Promises, Async/Await", "Responsive Web Design", "Redux-Saga", "GitHub Pull Requests & Review", "Teamwork", "Redux (Toolkit)", "Trello", "Markdown", "React Hooks", "Immutability", "Error handling", "NPM", "CSS BEM convention", "Working with API (fetch, axios)", "React", "SCSS", "CSS Grid", "JavaScript: ES6+", "Git", "CSS Flexbox"];

  return (
    <Wrapper>
      {skillset.map((skill, index) => {
        return <Item key={index}>{skill}</Item>
      })}
    </Wrapper>
  )
};