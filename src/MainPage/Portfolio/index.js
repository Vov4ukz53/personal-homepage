import { useSelector } from "react-redux";
import { Loading } from "./Loading";
import { Error } from "./Error";
import { Title } from "../../common/title";
import { GithubIcon } from "../../common/GithubIcon";
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
} from "../mainPageSlice";

export const Portfolio = () => {
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const myRepositories = useSelector(selectMyRepositories);
  const linkDemo = "https://vov4ukz53.github.io/";

  return (
    <Wrapper>
      <Header>
        <GithubIcon />
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
                  <Paragraph>info</Paragraph>
                  <Paragraph demo>Demo:{" "}
                    <Link href={`${linkDemo}${repository.name}/`}
                      title={`${linkDemo}${repository.name}/`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      https://link.demo.com
                    </Link>
                  </Paragraph>
                  <Paragraph>Code:{" "}
                    <Link href={repository.html_url}
                      title={repository.html_url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      https://link.code.com
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