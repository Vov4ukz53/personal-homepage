import { useSelector } from "react-redux";
import { selectMyRepositories } from "../../../../personalPageSlice";
import { linkDemo } from "../../../../links";
import {
  Body,
  Tile,
  Name,
  Paragraph,
  Link,
} from "./styled";

export const Repositories = () => {
  const myRepositories = useSelector(selectMyRepositories);

  return (
    <Body>
      {myRepositories.map((repository) => (
        <Tile key={repository.id}>
          <Name>{repository.name}</Name>
          <Paragraph>{repository.description}</Paragraph>
          <Paragraph demo>Demo:{" "}
            <Link
              href={`${linkDemo}${repository.name}`}
              target="_blank"
              rel="noreferrer"
            >
              {`${linkDemo}${repository.name}`}
            </Link>
          </Paragraph>
          <Paragraph>Code:{" "}
            <Link
              href={repository.html_url}
              target="_blank"
              rel="noreferrer"
            >
              {repository.html_url}
            </Link>
          </Paragraph>
        </Tile>
      ))}
    </Body>
  )
};