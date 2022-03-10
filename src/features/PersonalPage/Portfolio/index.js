import { useSelector } from "react-redux";
import { Loading } from "./Loading";
import { Error } from "./Error";
import { Title } from "../../../common/title";
import { GithubIcon } from "../../../common/GithubIcon";
import { linkDemo } from "../../../links";
import {
  Wrapper,
  Header,
  SubTitle,
  Body,
  Tile,
  Name,
  Paragraph,
  Link
} from "./styled";
import {
  selectError,
  selectLoading,
  selectMyRepositories
} from "../../../personalPageSlice";

export const Portfolio = () => {
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const myRepositories = useSelector(selectMyRepositories);

  return (
    <Wrapper>
      <Header>
        <GithubIcon portfolio="true" />
        <Title portfolio>Portfolio</Title>
        <SubTitle>My recent projects</SubTitle>
      </Header>

      {loading ? <Loading />
        : error ? <Error />
          : (
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
      }
    </Wrapper >
  );
};