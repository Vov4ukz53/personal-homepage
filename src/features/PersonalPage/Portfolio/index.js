import { useSelector } from "react-redux";
import { Loading } from "./Loading";
import { Error } from "./Error";
import { Title } from "../../../common/title";
import { GithubIcon } from "../../../common/GithubIcon";
import {
  Wrapper,
  Header,
  SubTitle,
} from "./styled";
import {
  selectError,
  selectLoading,
} from "../../../personalPageSlice";
import { Repositories } from "./Repositories";

export const Portfolio = () => {
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  return (
    <Wrapper>
      <Header>
        <GithubIcon portfolio="true" />
        <Title portfolio>Portfolio</Title>
        <SubTitle>My recent projects</SubTitle>
      </Header>

      {loading ? <Loading />
        : error ? <Error />
          : <Repositories />
      }
    </Wrapper >
  );
};